import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icons.component.html',
  styleUrl: './svg-icons.component.scss',
})
export class SvgIconsComponent {
  @Input() name;
}
