import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  auth = new BehaviorSubject(null);
  error = null;
  constructor(private http: HttpClient, private route: Router) {}

  onLogin(body: {}) {
    return this.http.post('https://reqres.in/api/register', body).pipe(
      tap((res) => {
        this.storeAuth(res);
        this.route.navigateByUrl('/user/dashboard');
      }),
      catchError((errRes) => {
        return throwError(() => {
          new Error(errRes);
        });
      })
    );
  }

  storeAuth(res) {
    localStorage.setItem('authData', JSON.stringify(res));
  }

  // getAuth() {
  //   return JSON.parse(localStorage.getItem('authData'));
  // }
  Users() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
