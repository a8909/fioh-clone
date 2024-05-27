import { Component } from '@angular/core';
import { NgFor, NgSwitch } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, NgIf, NgFor],
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
  show = 1;
  hide = 2;

  shouldShowQuestion(questionId: number): boolean {
    return questionId !== 6;
  }



  showContext(getId: any) {
    console.log(getId)
    this.selectedId = getId;
  }
}
