import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AppSiteConfig,
  PopularCourseConfig,
} from '../../config/app-site-config';
import { WhatsAppContactService } from '../../services/whatsapp-contact.service';

/** Served from public/app-config.json at build time */
const APP_CONFIG_URL = 'app-config.json';

type PopularCourseView = PopularCourseConfig & { scheduleLabel: string };

@Component({
  selector: 'app-popular-courses',
  imports: [],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.scss',
})
export class PopularCourses implements OnInit, OnDestroy {
  constructor(
    private whatsappContact: WhatsAppContactService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  currentPage = 0;
  coursesPerPage = 3;
  private autoSlideTimer: ReturnType<typeof setInterval> | null = null;
  private isHovered = false;

  /** Populated from app-config.json */
  allCourses: PopularCourseView[] = [];

  /** Shown until app-config.json finishes loading */
  isLoading = true;

  /** Placeholder count matches first carousel page */
  readonly skeletonSlots = [1, 2, 3] as const;

  ngOnInit(): void {
    this.http.get<AppSiteConfig>(APP_CONFIG_URL).subscribe({
      next: (config) => this.applyConfig(config),
      error: () => {
        this.allCourses = [];
        this.isLoading = false;
        this.startAutoSlide();
        this.cdr.detectChanges();
      },
    });
  }

  private applyConfig(config: AppSiteConfig): void {
    const scheduleDefault =
      config.defaultScheduleLabel ?? 'Weekend/Weekday Classes';
    const list = config.popularCourses ?? [];
    this.allCourses = list.map((c) => ({
      ...c,
      scheduleLabel: c.scheduleLabel ?? scheduleDefault,
    }));
    if (this.currentPage >= this.totalPages) {
      this.currentPage = 0;
    }
    this.isLoading = false;
    this.startAutoSlide();
    this.cdr.detectChanges();
  }

  onCoursesHoverStart(): void {
    this.isHovered = true;
  }

  onCoursesHoverEnd(): void {
    this.isHovered = false;
  }

  private startAutoSlide(): void {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
    }
    this.autoSlideTimer = setInterval(() => {
      if (this.totalPages === 0 || this.isHovered) {
        return;
      }
      this.currentPage = (this.currentPage + 1) % this.totalPages;
      this.cdr.detectChanges();
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  openCourseDetails(course: PopularCourseView): void {
    this.whatsappContact.openWithCourse({ name: course.name });
  }

  get totalPages(): number {
    return Math.ceil(this.allCourses.length / this.coursesPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  get visibleCourses(): PopularCourseView[] {
    const start = this.currentPage * this.coursesPerPage;
    return this.allCourses.slice(start, start + this.coursesPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
