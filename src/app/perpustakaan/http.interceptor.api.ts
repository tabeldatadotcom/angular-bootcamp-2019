import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorApi implements HttpInterceptor {

  constructor(private _loginService: LoginService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._loginService.getToken()}`
      }
    });
    return next.handle(req);
    return undefined;
  }

}
