import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-logos',
  imports: [],
  templateUrl: './brand-logos.html',
  styleUrl: './brand-logos.scss',
})
export class BrandLogos {
  brands = [
    { name: 'Growtify', color: '#6c5ce7' },
    { name: 'Gold Fish', color: '#00b894' },
    { name: 'Growtify', color: '#e17055' },
    { name: 'Gold Fish', color: '#0984e3' },
    { name: 'Growtify', color: '#6c5ce7' },
    { name: 'Gold Fish', color: '#00b894' },
    { name: 'Growtify', color: '#e17055' },
    { name: 'Gold Fish', color: '#0984e3' },
    { name: 'Growtify', color: '#fdcb6e' },
  ];
}
