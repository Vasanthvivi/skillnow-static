import { Component } from '@angular/core';
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
export class Home {}
