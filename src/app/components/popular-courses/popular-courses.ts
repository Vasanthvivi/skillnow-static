import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-courses',
  imports: [],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.scss',
})
export class PopularCourses {
  courses = [
    {
      title: 'Web Development',
      description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc. Itot Europa usa li sam vocabular.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg',
      tags: ['Web', 'Development'],
      date: '28 Jan 2023',
      time: '10:00pm',
      instructor: 'Monica Angelo',
      participants: 90,
    },
    {
      title: 'Principles of UI Design',
      description: 'Li Europan lingues es membres del same familie. Lor separat existentie es un myth. Por scientie, musica, sport etc. Itot Europa usa li sam vocabular.',
      image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg',
      tags: ['UI', 'Design'],
      date: '22 Jan 2023',
      time: '9:00pm',
      instructor: 'Alexander Doe',
      participants: 85,
    },
    {
      title: 'Integrated Marketing',
      description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc. Itot Europa usa li sam vocabular.',
      image: 'https://img.freepik.com/free-vector/digital-marketing-team-with-laptops-light-bulb-marketing-team-metrics-marketing-team-lead-responsibilities-concept-pinkish-coral-bluevector-isolated-illustration_335657-1711.jpg',
      tags: ['Marketing'],
      date: '15 Jan 2023',
      time: '08:00pm',
      instructor: 'Jojo Angelo',
      participants: 50,
    },
  ];
}
