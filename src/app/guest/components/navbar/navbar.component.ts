import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../shared/modal.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [CommonModule, ModalDirective],
})
export class NavbarComponent implements OnInit {
  // @ViewChild(MemoralModalComponent) m: MemoralModalComponent;
  constructor(private route: Router) {}
  open: boolean = false;
  storage: any;
  validate() {
    if (localStorage.getItem('authData')) {
      this.route.navigateByUrl(`user/Micheal/create-memorial`);
    } else {
      this.route.navigateByUrl('/signIn');
      return;
    }
    // this.m.showModal();
  }

  ngOnInit() {}
}
