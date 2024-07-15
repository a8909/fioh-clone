import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Modal]',
  standalone: true,
})
export class ModalDirective {
  // @Input() Modal;
  // @HostBinding('click') notRegistered() {
  //   this.Modal.ModalParent.nativeElement.classList.add('mShw');
  // }

  constructor() {}
}
