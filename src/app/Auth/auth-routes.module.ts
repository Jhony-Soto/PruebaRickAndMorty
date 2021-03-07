import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// Componentes
import {LoginComponent} from './Pages/login/login.component'
import {RegisterComponent} from './Pages/register/register.component'


const routesAuth:Routes=[
  { path:'',
    children:[
      {path:'login',component:LoginComponent},
      {path:'',redirectTo:'login'}, 
      {path:'register',component:RegisterComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesAuth)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutesModule { }
