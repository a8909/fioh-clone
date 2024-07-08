import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appModal]',
  standalone: true,
})
export class ModalDirective {
  @HostBinding('click') notRegistered() {}

  constructor() {}
}
