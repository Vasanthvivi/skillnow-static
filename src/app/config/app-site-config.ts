/**
 * Site-wide settings loaded from /app-config.json (see public/app-config.json).
 * Featured courses are driven by `batches`: each batch shares a live-classes line and start date.
 */
export interface FeaturedCourseConfig {
  name: string;
  duration: string;
  image: string;
  /** Optional; falls back to defaultInclusions */
  inclusions?: string;
  /** Optional; falls back to defaultScheduleLabel */
  schedule?: string;
}

export interface CourseBatchConfig {
  id: string;
  /** e.g. "2 months of Live Classes" */
  liveClassesLabel: string;
  /** Green line on cards, e.g. "Classes Starting on 28th April 2026" */
  classesStartNote: string;
  courses: FeaturedCourseConfig[];
}

/** Carousel cards in “Popular Courses”; aligns with batch catalog copy */
export interface PopularCourseConfig {
  name: string;
  duration: string;
  image: string;
  description: string;
  tags: string[];
  /** e.g. "2 months of Live Classes" */
  liveClassesLabel: string;
  /** Green line, e.g. "Classes Starting on 28th April 2026" */
  classesStartNote: string;
  /** Calendar row; defaults to site defaultScheduleLabel when omitted */
  scheduleLabel?: string;
}

export interface AppSiteConfig {
  defaultScheduleLabel?: string;
  defaultInclusions?: string;
  /** Primary: course catalog in ordered batches */
  batches?: CourseBatchConfig[];
  /** Legacy single-site start line (ignored when batches present) */
  classesStartNote?: string;
  /** Popular carousel (independent order; typically matches a primary batch) */
  popularCourses?: PopularCourseConfig[];
  [key: string]: unknown;
}

/** Flattened row for the template (batch fields merged onto each course) */
export type FeaturedCourseView = FeaturedCourseConfig & {
  liveClassesLabel: string;
  classesStartNote: string;
};
