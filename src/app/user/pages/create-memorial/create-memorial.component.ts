import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDown } from '../../../shared/dropDown.directive';
import { CommonModule } from '@angular/common';
import { TabsService } from '../../../tabs.service';
@Component({
  selector: 'app-create-memorial',
  standalone: true,
  imports: [DropDown, CommonModule],
  templateUrl: './create-memorial.component.html',
  styleUrl: './create-memorial.component.scss',
})
export class CreateMemorialComponent {
  Gender = ['Male', 'Female', 'Rather not to say'];
  isOpen: boolean = false;
  ct: string = 'about';

  constructor(private tabs: TabsService) {
    // this.tabs.showTab(this.ct);
  }
  bars(bar: string) {
    this.ct = bar;
  }
}
