import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  constructor(private service: RequestService, private route: Router) {}
  ngOnInit() {
    this.service.Users().subscribe((user: any) => {
      this.fname = user.data;
    });
  }
  LogOut() {
    const storage = localStorage.removeItem('authData');
    this.route.navigateByUrl('/signIn');
  }
}
