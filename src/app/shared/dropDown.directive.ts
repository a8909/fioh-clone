import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropDown]',
  standalone: true,
})
export class DropDown {
  @HostBinding('class.open') isOpen = true;
  @HostListener('click') toggle() {
    this.isOpen = !this.isOpen;
  }
}
