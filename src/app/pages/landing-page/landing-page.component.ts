import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule, CarouselModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  selectedId: any;
  questions = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sit corrupti, a inventore officiis iure atque et nisi saepe ipsum reprehenderit laudantium quam labore ullam quibusdam nemo dolorem deleniti eaque.',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sit corrupti, a inventore officiis iure atque et nisi saepe ipsum reprehenderit laudantium quam labore ullam quibusdam nemo dolorem deleniti eaque.',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sit corrupti, a inventore officiis iure atque et nisi saepe ipsum reprehenderit laudantium quam labore ullam quibusdam nemo dolorem deleniti eaque.',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sit corrupti, a inventore officiis iure atque et nisi saepe ipsum reprehenderit laudantium quam labore ullam quibusdam nemo dolorem deleniti eaque.',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  memoriaImage = [
    { id: 2, imagePath: 'assets/images/woman1.svg' },
    { id: 3, imagePath: 'assets/images/woman2.svg' },
    { id: 4, imagePath: 'assets/images/man.svg' },
    { id: 5, imagePath: 'assets/images/woman1.svg' },
    { id: 6, imagePath: 'assets/images/woman2.svg' },
    { id: 7, imagePath: 'assets/images/man.svg' },
  ];

  selectedIndex: number = 0;
  // hide = 2;

  showprev(imageId: number) {
    if (this.selectedIndex < this.memoriaImage.length) {
      this.selectedIndex = imageId - 1;
    }
  }

  showContext(getId: any) {
    console.log(getId);
    this.selectedId = getId;
  }
}