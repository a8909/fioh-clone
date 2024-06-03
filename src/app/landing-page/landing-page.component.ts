import { Component } from '@angular/core';
import { NgFor, NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { Splide } from '@splidejs/splide';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, NgIf, NgFor, HammerModule, Splide],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})


export class LandingPageComponent {
  selectedId: any;
  questions = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
    { id: 2, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
    { id: 3, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
    { id: 4, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
  ]


  memoriaImage = [
    // {
    //   id: 1, text: "The memories of our loved ones shine forever. We ensure their legacy lives on by cherishing and preserving those precious moments that defined who they were.", button: "Browse all memorials",
    //   icon: "images/arrow_forwards.svg"
    // },
    { id: 2, imagePath: "assets/images/woman1.svg" },
    { id: 3, imagePath: "assets/images/woman2.svg" },
    { id: 4, imagePath: "assets/images/man.svg" },
    { id: 5, imagePath: "assets/images/woman1.svg" },
    { id: 6, imagePath: "assets/images/woman2.svg" },
    { id: 7, imagePath: "assets/images/man.svg" }
  ]


  sliderImage() {
    const readImage = document.getElementsByClassName('scrlImgs');
    for (var i = 0; i < readImage.length; i++) {
      this.selectedId = readImage[i];
      new Splide(this.selectedId).mount();
    }
  }


  selectedIndex: number = 0;
  // hide = 2;

  showprev(imageId: number) {
    if (this.selectedIndex < this.memoriaImage.length) {
      this.selectedIndex = imageId - 1
    }

  }


  showContext(getId: any) {
    console.log(getId)
    this.selectedId = getId;
  }
}
