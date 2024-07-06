import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { animate, style, transition, trigger } from '@angular/animations';
import { PatnershipComponent } from '../../../patnership/patnership.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundcolor: 'yellow', opacity: 0 }),
        animate(2000),
      ]),
    ]),
  ],
  imports: [FormsModule, CommonModule, CarouselModule, PatnershipComponent],
})
export class LandingPageComponent implements OnInit {
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
    // { id: 4, imagePath: 'assets/images/man.svg' },
    // { id: 5, imagePath: 'assets/images/woman1.svg' },
    // { id: 6, imagePath: 'assets/images/woman2.svg' },
    // { id: 7, imagePath: 'assets/images/man.svg' },
  ];

  selectedIndex: number = 0;

  showContext(getId: any) {
    this.selectedId = getId;
  }

  sliderIndex: number = 0;
  flexSlider = [{ content: 'lorem ipsum', src: '' }];
  ngOnInit(): void {
    // this.fiohService.slider(this.memoriaImage);
  }
}
