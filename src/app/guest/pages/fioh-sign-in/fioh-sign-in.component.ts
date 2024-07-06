import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { CusCheckBoxComponent } from '../../../shared/components/cus-check-box/cus-check-box.component';
import { CommonModule } from '@angular/common';
import { FbgComponent } from '../../../shared/components/fbg/fbg.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

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
    ReactiveFormsModule,
  ],
})
export class FiohSignInComponent implements OnInit {
  signUpForm: FormGroup;
  logs = [];
  submitted: boolean = false;

  // This is a template driven approach
  // onSubmit(form: NgForm) {
  //   const value = form.value;
  //   const l = { email: value.email, password: value.pwd };
  //   this.logs.push(l);
  //   console.log(this.logs);
  //   form.reset();
  // }

  fiohBtns = [
    { imageSrc: 'assets/images/facebook.svg', text: 'Continue with Facbeook' },
    { imageSrc: 'assets/images/facebook.svg', text: 'Continue with Google' },
  ];

  signFbg(index: number) {
    index == 0
      ? console.log(this.fiohBtns[0].text)
      : console.log(this.fiohBtns[1].text);
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwd: new FormControl(null, Validators.required),
    });
  }
  // reactive form approach
  onSubmit() {
    this.submitted = true;
    this.logs.push({
      emails: this.signUpForm.get('email').value,
      passwords: this.signUpForm.get('pwd').value,
    });
    console.log(this.logs);
    this.signUpForm.reset();
  }
}
