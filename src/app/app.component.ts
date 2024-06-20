import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterModule, FooterComponent, NavbarComponent],
})
export class AppComponent {
  title = 'typescript-tutorial';
  componentStatus: boolean = true;
  footer: boolean = true;
}
