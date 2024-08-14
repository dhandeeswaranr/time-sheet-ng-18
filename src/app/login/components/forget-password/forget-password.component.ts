import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  forgetPasswordForm!:FormGroup;
  @Output() screen = new EventEmitter<string>();
  constructor(private fb:FormBuilder){
    this.createLoginFormControls();
  }

  createLoginFormControls(){
    this.forgetPasswordForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginClick(){
    //this.loginInfo.emit(this.loginForm.value)
  }
  viewScreen(){
    this.screen.emit('login-screen')
  }
}
