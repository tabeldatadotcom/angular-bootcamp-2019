import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) {
  }

  login(username: string, password: string) {
    let header = new HttpHeaders();
    header = header.append('Authorization', `Basic ${btoa('perpus:123456')}`);

    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    params = params.append('grant_type', 'password');
    return this._http.post(`/oauth/token`,
      {}, {
        headers: header,
        params: params,
        observe: 'response'
      });
  }
}
