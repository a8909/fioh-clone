import { Component, Input, OnInit, ViewChild, DoCheck } from '@angular/core';
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
export class UserLayoutComponent implements OnInit, DoCheck {
  @ViewChild(DashboardComponent) dash: DashboardComponent;
  fname : any;
  // mem: any = 'Settings';
  change: boolean = false;
  constructor(private service: RequestService, private route: Router) {}
  ngDoCheck(): void {
    this.change = true;
  }

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
