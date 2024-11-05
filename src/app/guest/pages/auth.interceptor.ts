import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './fioh-sign-in/user.model';
import { RequestService } from '../../services.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userModel: Users, private authService: RequestService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //if the url path include login add the token
    const token = this.authService.getToken('token');
    if (token) {
      if (
        request.url.includes(
          '/accounts:signInWithPassword?key=AIzaSyDx8h2UbViCKOTIJGNzFefatv_GlwrawrE'
        )
      ) {
        const userToken = this.userModel.token;
        const req = request.clone({
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userToken,
          }),
        });
        return next.handle(req);
      }
    }
    console.log('request sent successfully');
    return next.handle(request);
  }
}
