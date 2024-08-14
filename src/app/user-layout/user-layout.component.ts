import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RequestService } from '../services.service';
import { DashboardComponent } from '../guest/components/dashboard/dashboard.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
})
export class UserLayoutComponent implements OnInit {
  @ViewChild(DashboardComponent) dash: DashboardComponent;
  @Input() fname;
  mem: boolean = false;
  constructor(private service: RequestService, private route: Router) {}
  checkers() {
    this.mem = this.dash.memCheck;
    console.log(this.mem);
  }
  ngOnInit() {
    this.service.Users().subscribe((user: any) => {
      this.fname = user.data;
    });
    this.checkers();
  }
  LogOut() {
    const storage = localStorage.removeItem('authData');
    this.route.navigateByUrl('/signIn');
  }
}
