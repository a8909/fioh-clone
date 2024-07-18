import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import EventEmitter from 'events';

@Component({
  selector: 'app-memoral-modal',
  standalone: true,
  imports: [],
  templateUrl: './memoral-modal.component.html',
  styleUrl: './memoral-modal.component.scss',
})
export class MemoralModalComponent {
  constructor(private route: Router) {}
  @ViewChild('ModalParent') ModalParent: ElementRef;
  @Input() ref: Renderer2;
  openModal = false;
  showModal() {
    // let modal = document.querySelector('bigCont');
    // this.openModal = true;
    // this.ref.addClass(modal, '.modal');
    console.log('modal is show');
  }

  createMemorial() {
    this.route.navigateByUrl('/signIn');
    this.openModal = false;
    return;
  }
  onClose() {
    this.openModal = false;
  }
}
