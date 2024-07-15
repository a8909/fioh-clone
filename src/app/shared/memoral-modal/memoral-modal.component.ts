import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-memoral-modal',
  standalone: true,
  imports: [],
  templateUrl: './memoral-modal.component.html',
  styleUrl: './memoral-modal.component.scss',
})
export class MemoralModalComponent {
  @ViewChild('ModalParent') ModalParent: ElementRef;
  showModal() {
    console.log('modal is showing');
  }
}
