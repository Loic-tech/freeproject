import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../Models/User.model";
import {LoginRequest} from "../../Models/LoginRequest.model";
import {TokenstorageService} from "../../tokenstorage.service";
import {InfoUserModel} from "../../Models/InfoUser.model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signInForm!: FormGroup

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loading = false;
  test: boolean = false;
  infoUser!: InfoUserModel;
  user: LoginRequest | undefined;


  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private tokenStorage: TokenstorageService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signInForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(4)]],
      password: ['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/),Validators.minLength(6)]]
    })
  }

  get f() {
    return this.signInForm.controls;
  }

  onSubmit() {
    this.test = true;
    // @ts-ignore
    const username = this.signInForm.get('username').value;
    // @ts-ignore
    const password = this.signInForm.get('password').value;
    this.user = new LoginRequest(username,password);
    this.loading = true;
    this.authService.signInUser(this.user).subscribe(
      data => {
        this.infoUser = data;
        console.log(this.infoUser);
        // @ts-ignore
        localStorage.setItem('info-user', JSON.stringify(this.infoUser));
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
        this.reload();
        this.router.navigate(['home']);
        this.test = false;
      },
      error =>{
        this.isLoginFailed = true;
        this.loading = false;
        this.signInForm.controls['username'].setErrors({invalid: true});
        this.signInForm.controls['password'].setErrors({invalid: true});
      }
    )

  }

  reload(): void {
    setTimeout(() => {
      location.reload();
    },1)

}





}
