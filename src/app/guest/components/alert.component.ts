import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-bars',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  imports: [NgSwitchCase, NgSwitchDefault, NgSwitch],
})
export class AlertComponent {}
