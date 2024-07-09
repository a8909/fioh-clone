import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  onLogin(body: {}) {
    this.http
      .post(
        'https://oxide-endpoint-default-rtdb.firebaseio.com/posts.json',
        body
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
