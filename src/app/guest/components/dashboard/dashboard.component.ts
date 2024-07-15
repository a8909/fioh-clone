import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { RequestService } from '../../../services.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(private service: RequestService) {}
  @Input() users: {};
  categories = [
    { cat: 'Memorials', price: '0' },
    { cat: 'Memorial Visitors', price: '0' },
    { cat: 'Donations', price: '0.00' },
    { cat: 'Collaborators', price: '0' },
  ];

  ngOnInit(): void {
    console.log(this.service.getAuth());
    this.service.Users().subscribe((user: any) => {
      this.users = user.data.first_name;
      console.log(this.users);
    });
  }
}
