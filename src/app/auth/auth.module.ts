import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../../shared/material/material.module';
import {AuthComponent} from './auth.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent]
})
export class AuthModule { }
