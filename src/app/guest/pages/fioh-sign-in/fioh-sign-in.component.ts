import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { CusCheckBoxComponent } from '../../../shared/components/cus-check-box/cus-check-box.component';
import { CommonModule } from '@angular/common';
import { FbgComponent } from '../../../shared/components/fbg/fbg.component';
import { FormsModule, NgForm } from '@angular/forms';

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
    FormsModule,
  ],
})
export class FiohSignInComponent implements OnInit {
  logs = [];
  button: boolean = true;
  onSubmit(form: NgForm) {
    const value = form.value;
    const l = { email: value.email, password: value.pwd };
    this.logs.push(l);
    console.log(this.logs);
    form.reset();
  }

  fiohBtns = [
    { imageSrc: 'assets/images/facebook.svg', text: 'Continue with Facbeook' },
    { imageSrc: 'assets/images/facebook.svg', text: 'Continue with Google' },
  ];

  signFbg(index: number) {
    index == 0
      ? console.log(this.fiohBtns[0].text)
      : console.log(this.fiohBtns[1].text);
  }

  ngOnInit() {}
}
