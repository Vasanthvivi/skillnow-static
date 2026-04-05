import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { WhatsAppContactService } from '../../services/whatsapp-contact.service';

interface Course {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-popular-courses',
  imports: [],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.scss',
})
export class PopularCourses implements OnInit, OnDestroy {
  constructor(
    private whatsappContact: WhatsAppContactService,
    private cdr: ChangeDetectorRef
  ) {}

  currentPage = 0;
  coursesPerPage = 3;
  private autoSlideTimer: ReturnType<typeof setInterval> | null = null;
  private isHovered = false;

  ngOnInit(): void {
    this.startAutoSlide();
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

  openCourseDetails(course: Course): void {
    this.whatsappContact.openWithCourse({ name: course.title });
  }

  allCourses: Course[] = [
    {
      title: 'DevOps Engineering',
      description: 'Learn CI/CD pipelines, Docker, Kubernetes and cloud deployment strategies to streamline your development workflow and operations.',
      image: 'https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370941.jpg',
      tags: ['DevOps', 'Cloud'],
    },
    {
      title: 'Cloud Data Engineering',
      description: 'Build scalable data pipelines on AWS, Azure and GCP. Learn ETL processes, data warehousing and real-time data processing.',
      image: 'https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-812.jpg',
      tags: ['Cloud', 'Data'],
    },
    {
      title: 'AWS Cloud Engineer',
      description: 'Master core AWS services to deploy, monitor, and scale cloud workloads with security and reliability best practices.',
      image: 'https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-730.jpg',
      tags: ['AWS', 'Cloud'],
    },
    {
      title: 'Azure DevOps Engineer',
      description: 'Automate software delivery with Azure DevOps tools, CI/CD pipelines, infrastructure workflows, and release strategies.',
      image: 'https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370941.jpg',
      tags: ['Azure', 'DevOps'],
    },
    {
      title: 'GCP Cloud Engineer',
      description: 'Build and manage cloud infrastructure on Google Cloud Platform including compute, networking, storage, and operations.',
      image: 'https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-730.jpg',
      tags: ['GCP', 'Cloud'],
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'Protect networks and systems from cyber threats. Learn ethical hacking, penetration testing and security best practices.',
      image: 'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
      tags: ['Security', 'Network'],
    },
    {
      title: 'Cisco SD-WAN Solutions',
      description: 'Learn SD-WAN architecture, policy design, and secure branch connectivity for modern enterprise networking.',
      image: 'https://img.freepik.com/free-vector/computer-networking-isometric-concept-with-cloud-storage-technology-router-icons-3d-illustration_1284-30995.jpg',
      tags: ['Cisco', 'Network'],
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
