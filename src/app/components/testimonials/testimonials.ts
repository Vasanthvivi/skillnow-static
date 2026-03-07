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
      text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.',
      avatarBg: '#6c5ce7',
    },
    {
      name: 'Lee Jin Sho',
      text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.',
      avatarBg: '#00b894',
    },
    {
      name: 'Angelina Mersa',
      text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.',
      avatarBg: '#e17055',
    },
    {
      name: 'Goshila Guyi',
      text: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.',
      avatarBg: '#0984e3',
    },
  ];
}
