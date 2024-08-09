import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from '../user-layout/user-layout.component';
import { DashboardComponent } from '../guest/components/dashboard/dashboard.component';
import { activate } from '../guest/pages/fioh-sign-in/auth.guard';
import { FiohMemorialComponent } from './pages/fioh-memorial/fioh-memorial.component';
import { CreateMemorialComponent } from '../guest/pages/create-memorial/create-memorial.component';
const routes: Routes = [
  {
    canActivate: [activate()],
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: ':name/dashboard', component: DashboardComponent },
      { path: ':name/online-memorial', component: FiohMemorialComponent },
      { path: ':name/create-memorial', component: CreateMemorialComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
