import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MidasoftService } from 'src/app/services/midasoft.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

 

  constructor(
    private serviceMidasoft:MidasoftService,
    private router:Router
  ) { }

  formRegistro=new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellido:new FormControl('',[Validators.required]),
    doctoIdent:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    clave:new FormControl('',[Validators.required]),
    cia:new FormControl('10')
  })


  get nombre(){ return this.formRegistro.get('nombre') }
  get apellido(){ return this.formRegistro.get('apellido') }
  get doctoIdent(){ return this.formRegistro.get('doctoIdent') }
  get email(){ return this.formRegistro.get('email') }
  get clave(){ return this.formRegistro.get('clave') }

  errorRegistro:boolean=false
  messageError:string;

  ngOnInit(): void {
  }

  saveRegister()
  {
    if(this.formRegistro.valid){
      this.serviceMidasoft.adduser(this.formRegistro.value)
        .subscribe((res:any)=>{
          this.router.navigateByUrl('/login')
        },
        (error)=>{
          this.errorRegistro=true
          this.messageError=error.error.Message
        })
      
    }else{
      this.formRegistro.markAllAsTouched()
    }
  }

}
