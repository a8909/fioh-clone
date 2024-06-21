import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter();
  select;
  ngOnInit() {
    this.onSelected(this.select == 'true' ? 'false' : 'true');
  }

  onSelected(selected: string) {
    this.selectedFeature.emit(selected);
  }
}
