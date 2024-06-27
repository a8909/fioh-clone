import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { RadioCheckComponent } from '../shared/components/radio-check/radio-check.component';

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
    // this.priceEvent.emit(this.plans);

    // At first the button is disabled tranform the button from disable = enable.
  }
}
