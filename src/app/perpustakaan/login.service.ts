import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AccessToken} from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLogin: boolean;

  constructor(private _http: HttpClient) {
  }

  login(username: string, password: string) {
    let header = new HttpHeaders();
    header = header.append('Authorization', `Basic ${btoa('perpus:123456')}`);

    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    params = params.append('grant_type', 'password');

    return this._http.post<AccessToken>(`/oauth/token`,
      {}, {
        headers: header,
        params: params,
        observe: 'response'
      });
  }

  getToken(): string {
    return localStorage.getItem('accessToken');
  }

  storeToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  isAutenticated() {
    this._isLogin = false;

    if (localStorage.getItem('accessToken')) {
      this._isLogin = true;
    }

    return this._isLogin;
  }
}
