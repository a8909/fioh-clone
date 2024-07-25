import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from './guest/pages/fioh-sign-in/user.model';

interface AuthResponse {
  email: string;
  localId: number;
  idtoken: string;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  auth = new BehaviorSubject(null);
  error = null;
  constructor(private http: HttpClient, private route: Router) {}
  user = new Subject<Users>();

  onLogin(body: {}) {
    return this.http.post('https://reqres.in/api/register', body).pipe(
      tap((res) => {
        this.storeAuth(res);
        this.route.navigateByUrl('/user/dashboard');
      }),
      catchError((errRes) => {
        //switch cas for handling error
        // switch(''){
        //   case '':
        //   break;
        // }
        return throwError(() => {
          new Error(errRes);
        });
      })
    );
  }

  // onSignUp() {
  //   return this.http.post<AuthResponse>('', body).pipe(
  //     tap((resData) => {
  //       this.handleAuthentication(resData.localId, resData.idtoken);
  //     })
  //   );
  // }

  private handleAuthentication(id: number, token: string) {
    const user = new Users(id, token);
    this.user.next(user);
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
