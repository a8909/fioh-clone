import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstContentComponent } from '../first-content/first-content.component';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../../components/alert.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MemorialTabsComponent } from '../../../shared/components/memorial-tabs/memorial-tabs.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-each-memorial',
  standalone: true,
  imports: [
    CommonModule,
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    MemorialTabsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './each-memorial.component.html',
  styleUrl: './each-memorial.component.scss',
})
export class EachMemorialComponent implements OnInit {
  @ViewChild(FirstContentComponent) memorialPosts: FirstContentComponent;
  fn: string;
  dob: any;
  onDonate: FormGroup;
  postSub: Subscription;
  donation: boolean = false;
  edit: string = 'assets/images/edit.png';
  candle: string = 'assets/images/candle.png';
  placeholder: string = 'Add your tribute text here...';
  tabs: string = 'about';
  showTab(currentTab: string) {
    this.tabs = currentTab;
    console.log(this.tabs);
  }

  tributes = [
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
    { name: '', dob: Date() },
  ];

  leaveTribute = [
    { image: '', note: 'Light a candle' },
    { image: 'assets/images/flower.png', note: 'Lay a flower' },
    { image: 'assets/images/', note: 'Leave a note' },
  ];

  recentUpdate = [
    {
      src: 'assets/images/flower.png',
      title: 'Tiffany Simon',
      subTitle: 'left a tribute',
      year: '5 minute ago',
    },
    {
      src: 'assets/images/flower.png',
      title: 'Sarah Chavez',
      subTitle: 'added 5 photos',
      year: '1 day ago',
    },
    {
      src: 'assets/images/flower.png',
      title: 'Adeleke Dvaid',
      subTitle: 'added 2 photos',
      year: '2 days ago',
    },
    {
      src: 'assets/images/flower.png',
      title: 'Jonathan Kent',
      subTitle: 'left a tribute',
      year: 'Feb 16, 20023',
    },
    {
      src: 'assets/images/flower.png',
      title: 'Tiffany Simon',
      subTitle: 'left a tribute',
      year: '5 minute ago',
    },
  ];
  donate() {
    if (this.onDonate.invalid || localStorage.getItem('authData') == null) {
      this.donation = false; // aslo show a modal
      return;
    } else {
      this.onDonate.get('amount').value;
      this.donation = true; //finally submit to endpoint
    }
  }

  ngOnInit(): void {
    this.onDonate = new FormGroup({
      amount: new FormControl(null, Validators.required),
    });
  }
}
