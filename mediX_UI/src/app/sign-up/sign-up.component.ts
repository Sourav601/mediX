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
      Validators.pattern('[a-zA-Z0-9 ]{3,255}'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+'),
    ]),
    mobileNo: new FormControl('', [
      Validators.required,
      Validators.pattern('0?[0-9]{10}'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      ),
    ]),
    pincode: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{6}'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-z0-9/\\''(), :-]{2,255}"),
    ]),
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

    this._api.post(body, 'signup').subscribe(
      (result: any) => {
        console.log('success : ', result);
        this._router.navigate(['login']);
        alert('Sign up Successfull! Please Login with your New Account!');
      },
      (error: any) => {
        console.log('error : ', error);
        alert('Sign up Failed! Please try again!');
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
