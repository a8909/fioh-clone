import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './first-content.component.html',
  styleUrl: './first-content.component.scss',
})
export class FirstContentComponent {
  keyword = '';
  get filteredMemorials() {
    return this.memorials
      .filter((m) =>
        `${m.year}|${m.titleText}|${m.context}`
          .toLowerCase()
          .includes(this.keyword.toLowerCase())
      )
      .slice(this.currentPageIndex, this.pages);
  }

  memorials = [
    {
      id: 1,
      imagePath: 'assets/images/bol4.png',
      titleText: 'Final Middle Testing',
      // mortality: new Date(),
      // natality: new Date(),
      year: '(1935 - 2024)',
      link: 'final-middle-testing.fioh.com',
      created: 'Created by Fioh on May 14, 2024',
      context:
        'This memorial website was created in memory of our loved one, Final Middle Testing, 83 years old, born on May 23, 1935, and passed away on May 31, 2024. We will remember him forever....',
    },

    {
      id: 2,
      imagePath: 'assets/images/bol1.png',
      titleText: 'Newest Middle Memorial',
      year: '(1935 - 2024)',
      link: 'newest-middle -memorial.fioh.com',
      created: 'Created by Fioh on May 14, 2024',
      context:
        'This memorial website was created in memory of our loved one, Newest Middle Memorial, 83 years old, born on May 15, 1935, and passed away on May 01, 2024. We will remember him forever....',
    },
    {
      id: 3,
      imagePath: 'assets/images/bol2.png',
      titleText: 'Test Middle Memorial',
      year: '(1951 - 2024)',
      link: 'test-middle-memorial.fioh.com',
      created: 'Created by Fioh on May 14, 2024',
      context:
        'TThis memorial website was created in memory of our loved one, Test Middle Memorial, 83 years old, born on February 13, 1951, and passed away on April 11, 2024. We will remember him forever....',
    },
    {
      id: 4,
      imagePath: 'assets/images/bol3.png',
      titleText: 'Another Middle Memorial',
      year: '(1935 - 2024)',
      link: 'another-middle-memorial.fioh.com',
      created: 'Created by Fioh on May 03, 2024',
      context:
        'This memorial website was created in memory of our loved one, Another Middle Memorial, 83 years old, born on February 05, 1935, and passed away on May 01, 2024. We will remember him forever....',
    },
    {
      id: 5,
      imagePath: 'assets/images/bol3.png',
      // "assets/images/boluwa.png",
      titleText: 'John Di Doe',
      year: '(1983 - 2024)',
      link: 'john-di-doe.fioh.com',
      created: 'Created by Fioh on April 26, 2024',
      context:
        'This memorial website was created in memory of our loved one, John di Doe, 83 years old, born on February 01, 1983, and passed away on April 25, 2024. We will remember him forever....',
    },
  ];

  pages = 3;

  currentPageIndex = 0;
  get currentMemorials() {
    return this.memorials.find((userId) => userId.id == this.currentPageIndex);
  }
  prev() {
    console.log(this.currentPageIndex--);
    return this.currentPageIndex > 1
      ? this.currentPageIndex--
      : this.currentPageIndex == this.memorials.length;
  }

  next() {
    console.log(this.currentPageIndex++);
    console.log(this.memorials.length);
    return this.currentPageIndex < 0
      ? this.currentPageIndex++
      : (this.currentPageIndex = this.currentPageIndex);
  }
}