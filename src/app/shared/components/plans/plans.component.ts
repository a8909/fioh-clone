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
  imports: [],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  @Input() pack;
  @Input() id: number;
  @ViewChild('pricePlan') plans: ElementRef;
  @Output() priceEvent = new EventEmitter();

  onPressed() {
    this.priceEvent.emit(this.id);
    // this.priceEvenst.emit(this.plans);

    // At first the button is disabled tranform the button from disable = enable.
  }
}
