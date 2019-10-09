import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../core/app.config';
import { User } from '../models/user.model';

const httpHeaders = new HttpHeaders ({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/login/'
  constructor(
    private _http: HttpClient,
  ) { }

  private createHeaders(): any{
    let _headers = new HttpHeaders();
    _headers.append('Content-Type', 'application/json');
    return _headers;
  }

  login(user: User) {
    return this._http.post<User>(CONFIG.BASE_API + '/login', JSON.stringify(user), {headers: httpHeaders})
  }
}
