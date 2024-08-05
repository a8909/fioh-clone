import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstContentComponent } from '../first-content/first-content.component';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../../components/alert.component';

@Component({
  selector: 'app-each-memorial',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: './each-memorial.component.html',
  styleUrl: './each-memorial.component.scss',
})
export class EachMemorialComponent implements OnInit {
  @ViewChild(FirstContentComponent) memorialPosts: FirstContentComponent;
  fn: string;
  dob: any;
  postSub: Subscription;
  edit: string = 'assets/images/edit.png';
  candle: string = 'assets/images/candle.png';
  tributes = [
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
  ];

  ngOnInit(): void {
    // console.log(this.memorialPosts.totalPage);
  }
}
