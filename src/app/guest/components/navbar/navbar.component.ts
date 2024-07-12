import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalDirective } from '../../../shared/modal.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ModalDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  display: boolean;
  showSideBar() {
    let show = document.querySelector('#menuBar');

    if (show.classList.contains('menuBar')) {
      this.display = false;
      show.classList.remove('menuBar');
    } else {
      this.display = true;
      show.classList.add('menuBar');
    }
  }
}
