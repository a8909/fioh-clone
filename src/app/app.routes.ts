import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FirstContentComponent } from './first-content/first-content.component';
export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "memorial", component: FirstContentComponent }
]
