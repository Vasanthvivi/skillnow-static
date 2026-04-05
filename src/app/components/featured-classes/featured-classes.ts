import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    private http: HttpClient
  ) {}

  /** Populated from app-config.json (batches → flattened) */
  courses: FeaturedCourseView[] = [];

  ngOnInit(): void {
    this.http.get<AppSiteConfig>(APP_CONFIG_URL).subscribe({
      next: (config) => this.applyConfig(config),
      error: () => {
        this.courses = [];
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
  }

  openCourseDetails(course: { name: string }): void {
    this.whatsappContact.openWithCourse({ name: course.name });
  }
}
