import { Component, OnInit } from '@angular/core';
import { MidasoftService } from 'src/app/services/midasoft.service';

import {Router } from '@angular/router'

import{FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private serviceMidasoft:MidasoftService,
              private router:Router) { }

  errorInitSession:boolean=false
  messageError:string;

  formLogin=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    companyId:new FormControl('10'),
    password:new FormControl('',Validators.required),
    desdeMs:new FormControl(true),
  })

  ngOnInit(): void {
  }

  get emailField(){ return this.formLogin.get('username') }
  get passwordField(){ return this.formLogin.get('password') }

  InitSession()
  {
    if(this.formLogin.valid){
      // console.log(this.formLogin.value);
      this.serviceMidasoft.initSession(this.formLogin.value)
          .subscribe(res=>{
              localStorage.setItem('token',res['token'])
              localStorage.setItem('usuario',JSON.stringify(res['usuario']))
              this.router.navigateByUrl('dashboard')
          },
          (error)=>{
            this.errorInitSession=true
            this.messageError=error.error.message
          })
      
    }else{
      this.formLogin.markAllAsTouched();
    }
    
  }



}
