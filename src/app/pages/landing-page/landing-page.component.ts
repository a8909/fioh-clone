import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { setInterval } from 'timers';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule, CarouselModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  selectedId: any;
  // componentStatus: boolean = true;
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

  showContext(getId: any) {
    console.log(getId);
    this.selectedId = getId;
  }

  sliderIndex: number = 0;
  flexSlider = [{ content: 'lorem ipsum', src: '' }];

  slider() {
    for (let f = 0; f < this.flexSlider.length; f++) {
      console.log(this.flexSlider[f]); //dispay should be change to block here
    }
    this.sliderIndex++;
    if (this.flexSlider.length < this.sliderIndex) {
      this.sliderIndex = 1;
    }
    const dots = document.getElementsByClassName('dot');
    for (let d = 0; d < dots.length; d++) {
      dots[d].className = dots[d].className.replace('active', '');
    }
    setTimeout(this.slider, 2000);
  }
}
