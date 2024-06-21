import { Component, Input } from '@angular/core';
import { SvgIconsComponent } from '../svg-icons/svg-icons.component';

@Component({
  selector: 'cus-check-box',
  standalone: true,
  templateUrl: './cus-check-box.component.html',
  styleUrl: './cus-check-box.component.scss',
  imports: [SvgIconsComponent],
})
export class CusCheckBoxComponent {
  @Input() type = 'checkbox';
  @Input() idn = 'uniqueId';
  @Input() fcn = '';
}
