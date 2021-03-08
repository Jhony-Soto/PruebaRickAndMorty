import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { AuthRoutesModule } from './auth-routes.module';

//COMPONENETES
import { LoginComponent } from '../Auth/Pages/login/login.component';
import { RegisterComponent } from '../Auth/Pages/register/register.component';




@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutesModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
