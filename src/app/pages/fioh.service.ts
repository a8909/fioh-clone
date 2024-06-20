import { ElementRef, Injectable } from '@angular/core';
@Injectable()
export class FiohService {
  sliderIndex: number;
  _array: {}[] = [];
  constructor(private el: ElementRef) {}
  slider(_array: {}[] = []) {
    let tributee = this.el.nativeElement.querySelector('tributee');
    for (let f = 0; f < this._array.length; f++) {
      // console.log(f);
      // this.renderer.setStyle(tributee, 'display', ' block'); //dispay should be change to block here
    }
    this.sliderIndex++;
    if (this._array.length < this.sliderIndex) {
      this.sliderIndex = 1;
    }
    const dots = document.getElementsByClassName('dot');
    for (let d = 0; d < dots.length; d++) {
      dots[d].className = dots[d].className.replace('active', '');
    }
    setTimeout(() => {
      this.slider(_array);
    }, 2000);
  }
}
