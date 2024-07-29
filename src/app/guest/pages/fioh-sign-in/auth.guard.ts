import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const activate = (): CanActivateFn => {
  return () => {
    const router = inject(Router);
    if (localStorage.getItem('authData')) {
      console.log(true);
      return true;
      // allow user
    }
    router.navigateByUrl('/signIn');
    return false;
  };
};
