import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {AccessToken, Login} from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  model: Login;
  token: AccessToken;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  login($event: Event) {
    this.model = this.formGroup.value;
    this.loginService.login(this.model.username, this.model.password).subscribe(resp => {
      if (resp.status === 200) {
        this.token = resp.body;
        this.loginService.storeToken(this.token.access_token);
      }
    }, error => {
      console.error('error can\' get token');
    });
  }

  checkIsLogin() {
    console.log('anda sudah login: ' + this.loginService.isAutenticated());
  }
}
