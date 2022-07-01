import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private _signupService: SignUpService, private _router: Router) {}

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
    //console.log(this.signUpForm);
    this._signupService
      .postData(
        this.signUpForm.value.userName,
        this.signUpForm.value.email,
        this.signUpForm.value.mobileNo,
        this.signUpForm.value.password,
        this.signUpForm.value.pincode,
        this.signUpForm.value.address
      )
      .subscribe(
        (result: any) => {
          console.log('success : ', result);
          this._router.navigate(['dashboard']);
        },
        (error: any) => {
          console.log('error : ', error);
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
