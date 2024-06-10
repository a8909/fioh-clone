import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FirstContentComponent } from './pages/first-content/first-content.component';
import { PricingComponent } from './pages/pricing/pricing.component';
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'memorial', component: FirstContentComponent },
  { path: 'pricing', component: PricingComponent },
];
