import { style } from '@angular/animations';
import {
  CommonModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertComponent } from '../../components/alert.component';
import { PlansComponent } from '../../../shared/components/plans/plans.component';
import { RadioCheckComponent } from '../../../shared/components/radio-check/radio-check.component';
@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    CommonModule,
    AlertComponent,
    PlansComponent,
    RadioCheckComponent,
  ],
})
export class PricingComponent {
  Subscription = 'yearly';
  Packages: any[] = [];

  constructor() {
    this.setPackages();
  }

  setPackages() {
    this.Packages = [
      { level: 'Basic', card: 'No credit card required', price: '$0' },
      {
        level: 'Standard',
        card: 'Most popular',
        price: this.Subscription === 'yearly' ? '$40' : '$100',
      },
      {
        level: 'Premium',
        card: 'Access to all features',
        price: this.Subscription === 'yearly' ? '$80' : '$200',
      },
    ];
  }

  onSubscriptionChange(newSubscription: string) {
    this.Subscription = newSubscription;
    this.setPackages();
  }

  Features = [
    {
      heading: 'Create memorial',
      subHeading:
        'Create a tribute website for your loved one’s to preserve their memories',
    },
    {
      heading: 'Selection of beautiful themes',
      subHeading:
        'Customize your tribute website with one of many available themes.',
    },
    {
      heading: 'Photo gallery',
      subHeading:
        'Import and share photos of your loved one from your PC, mobile device, or Facebook page. Collaborators may also share photos.',
    },
    {
      heading: 'Share memories',
      subHeading:
        'Create biography, share stories, light virtual candles, leave other tributes celebrating the life of a family member or friend who passed away.',
    },
    {
      heading: 'Add collaborators',
      subHeading:
        'Invite as many family, friends, and colleagues as you would like to collaborate and create the online memorial page together.',
    },
    {
      heading: 'Integration with popular online services',
      subHeading:
        'Create biography, share stories, light virtual candles, leave other tributes celebrating the life of a family member or friend who passed away.',
    },
    {
      heading: 'Privacy controls',
      subHeading:
        'You may choose to keep your memorial website and its content visible only to you or allow everyone to visit and contribute.',
    },
    {
      heading: 'Advanced privacy controls',
      subHeading:
        'Control who can see your memorial by blocking strangers and inviting only selected guests. Your memorial will not be visible to anyone else.',
    },
    {
      heading: 'Video and music galleries',
      subHeading:
        'Enhance the memorial website with favorite music and videos of your loved one. You may add media from your PC or mobile device, YouTube, and your Facebook profile.',
    },
    {
      heading: 'Background music playlist',
      subHeading:
        'Upload your favorite songs and use them as a musical background for the website.',
    },
    {
      heading: 'Donations',
      subHeading:
        'Manage and create donations for the deceased family or charity.',
    },
    {
      heading: 'Events',
      subHeading:
        'Create and notify website visitors or guest about upcoming events like, Burial, Memorial Gathering, Candle Light procession etc...',
    },
    {
      heading: 'Manage guest notifications',
      subHeading:
        'Control notifications for your guests. You can choose to notify them of new posts, remind them of special dates, or turn off notifications for more privacy.',
    },
  ];

  onNavigate(ci: number) {
    console.log(ci);
  }
}
