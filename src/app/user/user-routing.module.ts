import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from '../user-layout/user-layout.component';
import { DashboardComponent } from '../guest/components/dashboard/dashboard.component';
import { FiohMemorialComponent } from '../guest/components/fioh-memorial/fioh-memorial.component';
const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/online-memorial', component: FiohMemorialComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
