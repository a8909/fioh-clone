import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule],
})
export class AppComponent implements OnInit {
  title = 'fioh';
  currentRoute: string;

  constructor(private route: Router) {}

  ngOnInit() {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.currentRoute = event.url;
    });
  }
}
