import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[Modal]',
  standalone: true,
})
export class ModalDirective implements OnInit {
  @Input() sideBar: boolean;

  // @Input() Modal;
  // @HostBinding('click') notRegistered() {
  //   this.Modal.ModalParent.nativeElement.classList.add('mShw');
  // }

  @HostBinding('style.display') displayBars: boolean;

  constructor() {}
  @HostListener('click') showSideBar() {
    this.displayBars === false ? console.log('none') : console.log('flex');
  }

  ngOnInit() {
    this.displayBars = this.sideBar;
    console.log(this.sideBar);
  }
}
