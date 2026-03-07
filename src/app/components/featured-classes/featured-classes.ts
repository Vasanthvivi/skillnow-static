import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-classes',
  imports: [],
  templateUrl: './featured-classes.html',
  styleUrl: './featured-classes.scss',
})
export class FeaturedClasses {
  classes = [
    {
      title: 'Online Class 1',
      image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
      label: 'Online Class',
      btnClass: 'btn-red',
    },
    {
      title: 'Online Class 2',
      image: 'https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148807389.jpg',
      label: 'Online Class',
      btnClass: 'btn-outline-white',
    },
    {
      title: 'Online Class 3',
      image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
      label: 'Online Class',
      btnClass: 'btn-outline-white',
    },
  ];
}
