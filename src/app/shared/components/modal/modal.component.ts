import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();
  @Input() message: string;
  modalClose() {
    this.dismiss.emit(true);
  }
}
