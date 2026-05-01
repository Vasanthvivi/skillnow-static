import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  AppSiteConfig,
  FeaturedCourseView,
} from '../../config/app-site-config';
import { WhatsAppContactService } from '../../services/whatsapp-contact.service';

/** Served from public/app-config.json at build time */
const APP_CONFIG_URL = 'app-config.json';

@Component({
  selector: 'app-featured-classes',
  imports: [],
  templateUrl: './featured-classes.html',
  styleUrl: './featured-classes.scss',
})
export class FeaturedClasses implements OnInit {
  constructor(
    private whatsappContact: WhatsAppContactService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  /** Populated from app-config.json (batches → flattened) */
  courses: FeaturedCourseView[] = [];

  /** Shown until app-config.json finishes loading */
  isLoading = true;

  /** One grid row on desktop (4 columns) */
  readonly skeletonSlots = [1, 2, 3, 4] as const;

  ngOnInit(): void {
    this.http.get<AppSiteConfig>(APP_CONFIG_URL).subscribe({
      next: (config) => this.applyConfig(config),
      error: () => {
        this.courses = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  private applyConfig(config: AppSiteConfig): void {
    const scheduleDefault =
      config.defaultScheduleLabel ?? 'Weekend/Weekday Classes';
    const inclusionsDefault =
      config.defaultInclusions ?? 'Includes live courses & more';

    if (!config.batches?.length) {
      this.courses = [];
      this.isLoading = false;
      this.cdr.detectChanges();
      return;
    }

    this.courses = config.batches.flatMap((batch) =>
      batch.courses.map((c) => ({
        ...c,
        liveClassesLabel: batch.liveClassesLabel,
        classesStartNote: batch.classesStartNote,
        schedule: c.schedule ?? scheduleDefault,
        inclusions: c.inclusions ?? inclusionsDefault,
      }))
    );
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  openCourseDetails(course: { name: string }): void {
    this.whatsappContact.openWithCourse({ name: course.name });
  }
}
