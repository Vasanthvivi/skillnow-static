import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, merge, of } from 'rxjs';
import { Hero } from '../../components/hero/hero';
import { BrandLogos } from '../../components/brand-logos/brand-logos';
import { OurServices } from '../../components/our-services/our-services';
import { FeaturedClasses } from '../../components/featured-classes/featured-classes';
import { PopularCourses } from '../../components/popular-courses/popular-courses';
import { Testimonials } from '../../components/testimonials/testimonials';
import { CtaBanner } from '../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    BrandLogos,
    OurServices,
    FeaturedClasses,
    PopularCourses,
    Testimonials,
    CtaBanner,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    merge(
      of(null),
      this.router.events.pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd)
      )
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        // Run after router microtasks so scroll isn’t overwritten by the framework
        setTimeout(() => this.scrollToSectionForUrl(), 0);
      });
  }

  private scrollToSectionForUrl(): void {
    const path = this.router.url.split('?')[0];
    const segment = path.replace(/^\//, '').split('/')[0] ?? '';

    const id =
      segment === '' ? 'hero' :
      segment === 'about' ? 'about' :
      segment === 'courses' ? 'courses' :
      segment === 'contact' ? 'contact' : null;

    if (!id) {
      return;
    }
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
