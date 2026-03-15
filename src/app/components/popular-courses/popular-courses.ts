import { Component } from '@angular/core';

interface Course {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  time: string;
  instructor: string;
  participants: number;
}

@Component({
  selector: 'app-popular-courses',
  imports: [],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.scss',
})
export class PopularCourses {
  currentPage = 0;
  coursesPerPage = 3;

  allCourses: Course[] = [
    // Page 1
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
      description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc. Itot Europa usa li sam vocabular.',
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
    // Page 2
    {
      title: 'Python Full Stack',
      description: 'Master Python with Django and React to build powerful full-stack web applications from scratch. Learn backend APIs and frontend interfaces.',
      image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg',
      tags: ['Python', 'Full Stack'],
      date: '10 Feb 2023',
      time: '7:00pm',
      instructor: 'Sarah Chen',
      participants: 120,
    },
    {
      title: 'DevOps Engineering',
      description: 'Learn CI/CD pipelines, Docker, Kubernetes and cloud deployment strategies to streamline your development workflow and operations.',
      image: 'https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370941.jpg',
      tags: ['DevOps', 'Cloud'],
      date: '05 Feb 2023',
      time: '6:30pm',
      instructor: 'James Wilson',
      participants: 75,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Dive into artificial intelligence and machine learning with hands-on projects using TensorFlow and PyTorch frameworks.',
      image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7135.jpg',
      tags: ['AI', 'ML'],
      date: '01 Feb 2023',
      time: '8:00pm',
      instructor: 'Priya Sharma',
      participants: 110,
    },
    // Page 3
    {
      title: 'Cloud Data Engineering',
      description: 'Build scalable data pipelines on AWS, Azure and GCP. Learn ETL processes, data warehousing and real-time data processing.',
      image: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-812.jpg',
      tags: ['Cloud', 'Data'],
      date: '20 Mar 2023',
      time: '7:30pm',
      instructor: 'Mike Johnson',
      participants: 65,
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'Protect networks and systems from cyber threats. Learn ethical hacking, penetration testing and security best practices.',
      image: 'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
      tags: ['Security', 'Network'],
      date: '15 Mar 2023',
      time: '9:00pm',
      instructor: 'Lisa Park',
      participants: 95,
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights using SQL, Python and visualization tools like Tableau and Power BI.',
      image: 'https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg',
      tags: ['Data', 'Analytics'],
      date: '10 Mar 2023',
      time: '6:00pm',
      instructor: 'David Brown',
      participants: 80,
    },
  ];

  get totalPages(): number {
    return Math.ceil(this.allCourses.length / this.coursesPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  get visibleCourses(): Course[] {
    const start = this.currentPage * this.coursesPerPage;
    return this.allCourses.slice(start, start + this.coursesPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
