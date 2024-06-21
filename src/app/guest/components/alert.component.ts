import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  imports: [NgSwitchCase, NgSwitchDefault, NgSwitch],
})
export class AlertComponent {
  @Input() message: string = '';
  Subscription: string = 'yearly';
  sPlan() {
    console.log(this.Subscription == 'yearly');
  }
}
