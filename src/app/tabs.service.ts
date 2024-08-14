import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  constructor() {}

  tabs: string = 'about';
  showTab(currentTab: string) {
    this.tabs = currentTab;
    console.log(this.tabs);
  }
}
