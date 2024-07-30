import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'pricing-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  @Input() pack;
  @Input() id: number;
  @ViewChild('pricePlan') plans: ElementRef;
  @Output() priceEvent = new EventEmitter();
  enable: boolean = true;

  checked() {
    this.enable = !this.enable;
  }

  onPressed() {
    this.priceEvent.emit(this.id);
    // this.priceEvenst.emit(this.plans);

    // At first the button is disabled tranform the button from disable = enable.
  }
}
