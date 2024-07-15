import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestService } from '../services.service';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent implements OnInit {
  @Input() fname;
  @Input() lname;
  constructor(private service: RequestService) {}
  ngOnInit() {
    this.service.Users().subscribe((user: any) => {
      this.fname = user.data.first_name;
      this.lname = user.data.last_name;
    });
  }
}
