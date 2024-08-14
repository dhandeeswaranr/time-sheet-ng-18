import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!:FormGroup;
  @Output() screen = new EventEmitter<string>();
  constructor(private fb:FormBuilder){
    this.createLoginFormControls();
  }

  createLoginFormControls(){
    this.signupForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginClick(){
    //this.loginInfo.emit(this.loginForm.value)
  }
  viewScreen(event:string){
    this.screen.emit(event)
  }
}
