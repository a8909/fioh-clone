import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../shared/modal.directive';
import { MemoralModalComponent } from '../../../shared/memoral-modal/memoral-modal.component';
import { RequestService } from '../../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, ModalDirective, MemoralModalComponent],
})
export class NavbarComponent {
  @ViewChild(MemoralModalComponent) m: MemoralModalComponent;
  constructor(private route: Router) {}
  open: boolean = false;
  validate() {
    if (localStorage.getItem('authData')) {
      this.route.navigateByUrl('users/dashboard');
      return;
    }
    this.m.showModal();
  }
}
