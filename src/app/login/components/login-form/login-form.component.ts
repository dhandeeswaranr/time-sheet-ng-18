import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm!:FormGroup;
  @Output() loginInfo = new EventEmitter();
  @Output() screen = new EventEmitter<string>();
  constructor(private fb:FormBuilder){
    this.createLoginFormControls();
  }

  createLoginFormControls(){
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginClick(){
    this.loginInfo.emit(this.loginForm.value)
  }

  viewScreen(event:string){
    this.screen.emit(event)
  }
}
