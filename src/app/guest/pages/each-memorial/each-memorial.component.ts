import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../../components/alert.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MemorialTabsComponent } from '../../../shared/components/memorial-tabs/memorial-tabs.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MemoralModalComponent } from '../../../shared/memoral-modal/memoral-modal.component';

@Component({
  selector: 'app-each-memorial',
  standalone: true,
  imports: [
    CommonModule,
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    MemorialTabsComponent,
    FormsModule,
    ReactiveFormsModule,
    MemoralModalComponent,
  ],
  templateUrl: './each-memorial.component.html',
  styleUrl: './each-memorial.component.scss',
})
export class EachMemorialComponent implements OnInit {
  fn: string;
  dob: any;
  onDonate: FormGroup;
  postSub: Subscription;
  donation: boolean = false;
  currentPage: number = 1;
  gallery = [];
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
    { image: 'assets/images/light.png', note: 'Light a candle' },
    { image: 'assets/images/flower.png', note: 'Lay a flower' },
    { image: 'assets/images/note.png', note: 'Leave a note' },
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
  photos = [
    { grid: 'assets/images/grid1.png' },
    { grid: 'assets/images/grid2.png' },
    { grid: 'assets/images/grid3.png' },
    { grid: 'assets/images/grid4.png' },
    { grid: 'assets/images/grid5.png' },
    { grid: 'assets/images/grid6.png' },
    { grid: 'assets/images/grid7.png' },
    { grid: 'assets/images/grid8.png' },
    { grid: 'assets/images/grid9.png' },
    { grid: 'assets/images/grid10.png' },
    { grid: 'assets/images/grid11.png' },
    { grid: 'assets/images/grid12.png' },
    { grid: 'assets/images/grid13.png' },
    { grid: 'assets/images/grid14.png' },
  ];
  donate() {
    if (this.onDonate.invalid || localStorage.getItem('authData') == null) {
      console.log('modal');
      this.donation = false; // aslo show a modal
      this.onDonate.reset();
      return;
    } else {
      this.onDonate.get('amount').value;
      this.onDonate.reset();
      this.donation = true; //finally submit to endpoint
    }
  }

  onPage(page: number) {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.onDonate = new FormGroup({
      amount: new FormControl(null, Validators.required),
    });
  }
}
