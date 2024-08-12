import { Component } from '@angular/core';
import { DropDown } from '../../../shared/dropDown.directive';

@Component({
  selector: 'app-create-memorial',
  standalone: true,
  imports: [DropDown],
  templateUrl: './create-memorial.component.html',
  styleUrl: './create-memorial.component.scss',
})
export class CreateMemorialComponent {
  Gender = ['Male', 'Female', 'Rather not to say'];
  isOpen: boolean = false;
}
