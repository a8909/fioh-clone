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
  questions = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
    { id: 2, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
    { id: 3, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
    { id: 4, title: 'Lorem ipsum dolor sit amet', answer: 'feajneafon afiaeofiaen aefiamofiaen' },
  ]
}
