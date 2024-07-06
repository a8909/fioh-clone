import { Component } from '@angular/core';
import { PatnershipComponent } from '../../../patnership/patnership.component';
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [PatnershipComponent],
})
export class AboutComponent {}
