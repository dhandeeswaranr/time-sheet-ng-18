import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login.routing.module';
import { SharedModule } from '@shared/shared.module'
import {provideHttpClient} from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginFormComponent,
    ForgetPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ],
  providers:[provideHttpClient()]
})
export class LoginModule { }
