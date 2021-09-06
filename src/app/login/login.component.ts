import { UserRegister } from './../Model/UserRegister';

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, Routes } from '@angular/router';

import { UserLogin } from '../Model/UserLogin';


import { AuthService } from '../_Services/Auth.service';


@Component(
{
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit 
{

    
  loginFormGroup: FormGroup ;

  RegisterFormGroup: FormGroup ;

  model : any = {};


  constructor(private authservices: AuthService , private router : Router , private formBuilder: FormBuilder) 
  { 

    this.loginFormGroup =  this.formBuilder.group(
    {

      Username: ["", Validators.required],

      Password: ["",Validators.required],

     });


     this.RegisterFormGroup =  this.formBuilder.group(
      {
  
        Username: ["", Validators.required],
  
        Email: ["", Validators.required],

        Password: ["",Validators.required],
  
      });

 
  }

  isLogin :boolean=true;


  ngOnInit(): void
  {
    this.initForms();
  }

  initForms() {/* Login form initialization */}


  Register()
  {



    // Construct user login payload object
      const RegisterData : UserRegister = 
      {

        Username : this.RegisterFormGroup.controls.Username.value,

        Email : this.RegisterFormGroup.controls.Email.value,

        Password: this.RegisterFormGroup.controls.Password.value,

      };



     console.log(" Register Model :", this.RegisterFormGroup);


    this.authservices.RegisterX(RegisterData).subscribe
    (
      next => 
      {
        console.log('Login Succced');

        this.router.navigate(['/home']);
      },

      error => {console.log('Login Failed')},

    );


  }


  login()
  {

    console.log("Login :");

  // Construct user login payload object
    const loginData: UserLogin = 
    {
      Username : this.loginFormGroup.controls.Username.value,
      Password: this.loginFormGroup.controls.Password.value,
    };



     console.log(" Login Model :",this.loginFormGroup);


    this.authservices.loginX(loginData).subscribe
    (

      next => 
      {

        console.log('Login Succced');

        this.router.navigate(['/home']);

      },

      error => {console.log('Login Failed')},

    );


  }





  logOut()
  {

    localStorage.removeItem('token');

    localStorage.removeItem('Log');

  }



  switchLogin() 
  { 
    console.log("isLogin :",this.isLogin)
    this.isLogin=!this.isLogin
   
  }



}
