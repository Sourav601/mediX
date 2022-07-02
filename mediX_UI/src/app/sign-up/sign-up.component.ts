import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private _router: Router, private _api: ApiService) {}

  ngOnInit(): void {}

  signUpForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    pincode: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  signUp() {
    const body = {
      name: this.signUpForm.value.userName,
      email: this.signUpForm.value.email,
      mobileNo: this.signUpForm.value.mobileNo,
      password: this.signUpForm.value.password,
      pincode: this.signUpForm.value.pincode,
      address: this.signUpForm.value.address,
    };

    this._api.post(body, 'signUp').subscribe(
      (result: any) => {
        console.log('success : ', result);
        //this._router.navigate(['dashboard']);
      },
      (error: any) => {
        console.log('error : ', error);
        //this._router.navigate(['dashboard']);
      }
    );
  }

  get userName() {
    return this.signUpForm.get('userName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get mobileNo() {
    return this.signUpForm.get('mobileNo');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get pincode() {
    return this.signUpForm.get('pincode');
  }
  get address() {
    return this.signUpForm.get('address');
  }
}
