import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  @ViewChild('footerMail') ftMail: ElementRef;
  @Output() selectedFeature = new EventEmitter();

  ngOnInit() {}

  onMsubmitted() {
    console.log(this.ftMail.nativeElement.value);
  }
}
