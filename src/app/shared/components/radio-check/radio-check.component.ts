import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconsComponent } from '../svg-icons/svg-icons.component';

@Component({
  selector: 'radio-check',
  standalone: true,
  imports: [CommonModule, SvgIconsComponent],
  templateUrl: './radio-check.component.html',
  styleUrl: './radio-check.component.scss',
})
export class RadioCheckComponent {
  @Input() radio = 'radioButton';
  @Input() rad = 'radioButton';
}
