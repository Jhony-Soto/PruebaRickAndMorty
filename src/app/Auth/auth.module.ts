import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutesModule } from './auth-routes.module';

//COMPONENETES
import { LoginComponent } from '../Auth/Pages/login/login.component';
import { RegisterComponent } from '../Auth/Pages/register/register.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutesModule,
    MaterialModule,
  ]
})
export class AuthModule { }
