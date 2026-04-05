import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      name: 'Richman Arees',
      text: 'The courses are well structured and the instructors explain concepts clearly. I was able to switch to a developer role after completing the program.',
      avatarBg: '#6c5ce7',
    },
    {
      name: 'Lee Jin Sho',
      text: 'Great learning experience. Live classes and hands-on projects helped me build real skills. Highly recommend for anyone looking to upskill.',
      avatarBg: '#00b894',
    },
    {
      name: 'Angelina Mersa',
      text: 'Flexible schedule and quality content. The support team was very helpful. I landed my current job thanks to the certification.',
      avatarBg: '#e17055',
    },
    {
      name: 'Goshila Guyi',
      text: 'Best investment in my career. The curriculum is industry-relevant and the instructors know their subject inside out.',
      avatarBg: '#0984e3',
    },
  ];
}
