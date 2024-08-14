import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { AppService } from './service/app.service';
import { CommunicationService } from '@communication_service';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'online-time-sheet'+environment.apikey;

  constructor(
    private service:AppService, 
    private globalService:CommunicationService,
    private router:Router){
      this.subcribeUserInfo();
      
    }

  ngOnInit(): void {
    
  }

  subcribeUserInfo(){
    this.globalService.getUserData().subscribe((res:any) => {
      if(res){
        this.validToken(res.email)
        this.router.navigateByUrl('/admin');
      }
    })
  }

  validToken(email:string){
    let data={
      username:email
    }
    this.service.validToken(data).subscribe(
      {
        next:(val:any)=>{
          if(val){
             console.log("VALID")
          }
        },
        error: (err:any) => {
          console.log("error", err)
          this.router.navigateByUrl('\login');
        } 
      }
    )
  }
}
