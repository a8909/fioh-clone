import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

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
  message: string = 'This ia a modal';
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
    this.message = null;
  }
}
