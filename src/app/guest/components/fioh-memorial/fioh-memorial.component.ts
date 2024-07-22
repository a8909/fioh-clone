import { Component } from '@angular/core';
import { FirstContentComponent } from '../../pages/first-content/first-content.component';

@Component({
  selector: 'app-fioh-memorial',
  standalone: true,
  templateUrl: './fioh-memorial.component.html',
  styleUrl: './fioh-memorial.component.scss',
  imports: [FirstContentComponent],
})
export class FiohMemorialComponent {}
