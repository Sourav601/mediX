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
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9@$!%*?&]{6,60}'),
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
        alert('Success: Check console for details');
        //this._router.navigate(['dashboard']);
      },
      (error: any) => {
        console.log('error : ', error.error.Message);
        alert('Error: Check console for details');
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
