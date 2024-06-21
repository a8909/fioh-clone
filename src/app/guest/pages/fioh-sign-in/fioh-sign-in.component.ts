import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { CusCheckBoxComponent } from '../../../shared/components/cus-check-box/cus-check-box.component';

@Component({
  selector: 'app-fioh-sign-in',
  standalone: true,
  templateUrl: './fioh-sign-in.component.html',
  styleUrl: './fioh-sign-in.component.scss',
  imports: [AuthLayoutComponent, CusCheckBoxComponent],
})
export class FiohSignInComponent {}
