import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [NgFor],
  templateUrl: './first-content.component.html',
  styleUrl: './first-content.component.css'
})
export class FirstContentComponent {

  memorials = [
    {
      id: 1,
      imagePath: "",
      titleText: 'Final Middle Testing',
      year: '(1935 - 2024)',
      link: 'final-middle-testing.fioh.com',
      created: 'Created by Fioh on May 14, 2024',
      context: 'This memorial website was created in memory of our loved one, Final Middle Testing, 83 years old, born on May 23, 1935, and passed away on May 31, 2024. We will remember him forever....'
    },

    {
      id: 2,
      imagePath: "",
      titleText: 'Newest Middle Memorial',
      year: '(1935 - 2024)',
      link: 'newest-middle -memorial.fioh.com',
      created: 'Created by Fioh on May 14, 2024',
      context: 'This memorial website was created in memory of our loved one, Newest Middle Memorial, 83 years old, born on May 15, 1935, and passed away on May 01, 2024. We will remember him forever....'
    },
    {
      id: 3,
      imagePath: "",
      titleText: 'Test Middle Memorial',
      year: '(1951 - 2024)',
      link: 'test-middle-memorial.fioh.com',
      created: 'Created by Fioh on May 14, 2024',
      context: 'This memorial website was created in memory of our loved one, Newest Middle Memorial, 83 years old, born on May 15, 1935, and passed away on May 01, 2024. We will remember him forever....'
    },
    {
      id: 4,
      imagePath: "",
      titleText: 'Another Middle Memorial',
      year: '(1935 - 2024)',
      link: 'another-middle-memorial.fioh.com',
      created: 'Created by Fioh on May 03, 2024',
      context: 'This memorial website was created in memory of our loved one, Another Middle Memorial, 83 years old, born on February 05, 1935, and passed away on May 01, 2024. We will remember him forever....'
    },
    {
      id: 5,
      imagePath: "",
      titleText: 'John Di Doe',
      year: '(1983 - 2024)',
      link: 'john-di-doe.fioh.com',
      created: 'Created by Fioh on April 26, 2024',
      context: 'This memorial website was created in memory of our loved one, John di Doe, 83 years old, born on February 01, 1983, and passed away on April 25, 2024. We will remember him forever....'
    },
  ]


}
