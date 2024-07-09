import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CusCheckBoxComponent } from '../../../shared/components/cus-check-box/cus-check-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  imports: [ReactiveFormsModule, CusCheckBoxComponent, CommonModule],
})
export class ContactUsComponent implements OnInit {
  @Input() placeholder = ' first Name';
  @Input() lastholder = ' last Name';
  @Input() emailholder = 'Email address';
  @Input() txtholder = 'leave us a message...';
  disable: boolean = true;
  submit: boolean = false;
  forms = [];
  formField: FormGroup;

  infos = [
    { tag: 'Email Address', content: 'example@yahoo.com' },
    { tag: 'Phone', content: '(+44)7898052915' },
    { tag: 'Our Office', content: '3, Park Lane, Wembley, London' },
  ];
  ngOnInit() {
    this.forms.push(
      (this.formField = new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        // txtarea: new FormControl('', Validators.required),
      }))
    );
    // console.log(this.forms);
  }
  // ngAfterViewInit() {
  //   for (let k of this.forms) {
  //     console.log(k.controls);
  //     k.controls != null ? (this.disable = true) : (this.disable = false);
  //   }
  // }

  onContinue() {
    this.submit = true;

    this.formField.reset();
    this.submit = false;
  }
}
