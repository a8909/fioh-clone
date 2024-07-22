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
  @Input() users;
  @Input() persons;
  error = null;
  categories = [
    { cat: 'Memorials', price: '0' },
    { cat: 'Memorial Visitors', price: '0' },
    { cat: 'Donations', price: '0.00' },
    { cat: 'Collaborators', price: '0' },
  ];
  year(date: Date) {
    return date.getFullYear();
  }

  userGroup = [
    {
      details: {
        profileImg: 'assets/images/wadepng.png',
        name: 'Wade warren',
        from: this.year(new Date(1996, 0, 1)),
        to: this.year(new Date(2023, 0, 1)),
      },
      status: 'Active',
      createdAt: new Date(2024, 1, 10),
      visitor: '100k',
      link: '',
      icon: '',
    },
  ];

  getPersons() {
    for (let p of this.userGroup) {
      this.persons = this.userGroup[0];
    }
    return this.persons;
  }

  ngOnInit(): void {
    this.service.Users().subscribe((user: any) => {
      this.users = user.data;
      console.log(this.users);
    });
    this.getPersons();
  }
}
