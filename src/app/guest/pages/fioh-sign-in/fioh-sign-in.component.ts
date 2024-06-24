import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { CusCheckBoxComponent } from '../../../shared/components/cus-check-box/cus-check-box.component';
import { CommonModule } from '@angular/common';
import { FbgComponent } from '../../../shared/components/fbg/fbg.component';

@Component({
  selector: 'app-fioh-sign-in',
  standalone: true,
  templateUrl: './fioh-sign-in.component.html',
  styleUrl: './fioh-sign-in.component.scss',
  imports: [
    AuthLayoutComponent,
    CusCheckBoxComponent,
    CommonModule,
    FbgComponent,
  ],
})
export class FiohSignInComponent {
  @ViewChild('emailInput') email: ElementRef;
  @ViewChild('passwordInput') password: ElementRef;
  @Output() logger = new EventEmitter<{ Email: any; Password: any }>();
  logs = [];
  values;
  buttonStatus: boolean; //this is used to check the disable button status

  logIn() {
    this.email.nativeElement.value != '' &&
    this.password.nativeElement.value != ''
      ? console.log((this.buttonStatus = false))
      : console.log((this.buttonStatus = true)); // state should be triggered
    //if inputs are empty
    this.logger.emit(
      (this.values = {
        Email: this.email.nativeElement.value,
        Password: this.password.nativeElement.value,
      })
    );

    this.logs.push(this.values);
    console.log(this.logs);
    this.password.nativeElement.value = '';
    this.email.nativeElement.value = '';
    // this.email.nativeElement.clear and this.password.nativeElement.clear
  }
}
