import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from './guest/pages/fioh-sign-in/user.model';

interface AuthResponse {
  email: string;
  localId: string;
  idtoken: string;
  refreshToken: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  auth = new BehaviorSubject(null);
  error: string;
  constructor(private http: HttpClient, private route: Router) {}
  user = new Subject<Users>();

  onLogin(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx8h2UbViCKOTIJGNzFefatv_GlwrawrE',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((res) => {
          const response = this.handleAuthentication(
            res.email,
            res.localId,
            res.idtoken,
            +res.expiresIn
          );
          // this.storeAuth(response);
          this.route.navigateByUrl('/user/dashboard');
        }),
        catchError(this.handleError)
      );
  }

  onSignUp(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx8h2UbViCKOTIJGNzFefatv_GlwrawrE',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idtoken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    id: string,
    token: string,
    expire: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expire * 1000);
    const user = new Users(email, id, token, expirationDate);
    this.user.next(user);
    this.storeAuth(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let err = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => {
        new Error(err);
      });
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        break;
      case 'OPERATION_NOT_ALLOWED':
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        break;
      case 'EMAIL_NOT_FOUND':
        break;
      case 'INVALID_PASSWORD':
        break;
      case 'USER_DISABLED':
        break;
    }
    return throwError(() => {
      new Error(err);
    });
  }

  storeAuth(response) {
    localStorage.setItem('authData', JSON.stringify(response));
  }

  getAuth() {
    return JSON.parse(localStorage.getItem('authData'));
  }
  Users() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
