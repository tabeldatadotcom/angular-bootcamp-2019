import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Login} from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  model: Login;

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
      console.log(resp);
    }, error => {
      console.error('error can\' get token');
    });
  }
}
