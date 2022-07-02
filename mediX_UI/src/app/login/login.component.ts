import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router, private _api: ApiService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  login() {
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this._api.post(body, 'signin').subscribe(
      (result: any) => {
        localStorage.setItem('mediX_Auth', result.Authorization);
        console.log('success : ', result);
        //this._router.navigate(['dashboard']);
      },
      (error: any) => {
        console.log('error : ', error.error.Message);
        //this._router.navigate(['dashboard']);
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
