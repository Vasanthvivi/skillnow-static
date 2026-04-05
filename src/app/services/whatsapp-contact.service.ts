import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface CourseForContact {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WhatsAppContactService {
  private openWithCourse$ = new Subject<CourseForContact>();

  /** Emits when the WhatsApp popup should open with course details prefilled. */
  readonly onOpenWithCourse = this.openWithCourse$.asObservable();

  /** Opens the WhatsApp contact popup with the given course pre-filled. */
  openWithCourse(course: CourseForContact): void {
    this.openWithCourse$.next(course);
  }
}
