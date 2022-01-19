import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {catchError, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {User} from "../../Models/User.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;

  user: User | undefined;
  errorMessage!: string;
  test: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.minLength(4)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/),Validators.minLength(6)]]
    })
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.test = true;
    if (this.signUpForm.invalid) {
      return;
    }
    // @ts-ignore
    const username = this.signUpForm.get('username').value;
    // @ts-ignore
    const email =  this.signUpForm.get('email').value;
    // @ts-ignore
    const password = this.signUpForm.get('password').value;
    this.user = new User(username,email,password);
    console.log(this.user);
    this.authService.createNewUser(this.user).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/auth/signin']);
            this.test = false;
      },
      (error) =>{
        this.errorMessage = error;
      }
    )
  }
}
