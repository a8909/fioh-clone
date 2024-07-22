import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin-routing/admin-routing-routing.module').then(
        (m) => m.AdminRoutingRoutingModule
      ),
  },
];
