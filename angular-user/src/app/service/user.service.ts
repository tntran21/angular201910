import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../core/app.config';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/login/'
  constructor(
    private _http: HttpClient,
  ) { }

  private createHeaders(): any {
    let _headers = new HttpHeaders();
    _headers.append('Content-type', 'application/json');
    return _headers;
  }

  login(user: User) {
    return this._http.post<User>(this.url, JSON.stringify({
     user: user
    }))
  }
}
