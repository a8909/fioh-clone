import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutComponent } from './components/guest-layout/guest-layout.component';
import { FiohSignInComponent } from './pages/fioh-sign-in/fioh-sign-in.component';
import { FirstContentComponent } from './pages/first-content/first-content.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EachMemorialComponent } from './pages/each-memorial/each-memorial.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CreateMemorialComponent } from '../user/pages/create-memorial/create-memorial.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'memorial', component: FirstContentComponent },
      { path: 'memorial/:id', component: EachMemorialComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact-Us', component: ContactUsComponent },
      { path: 'contact-Us/privacy', component: PrivacyComponent },
    ],
  },
  { path: 'signIn', component: FiohSignInComponent },
  { path: 'user/:name/create-memorial', component: CreateMemorialComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
