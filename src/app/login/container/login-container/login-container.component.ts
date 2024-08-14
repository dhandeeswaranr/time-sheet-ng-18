import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { stringify } from 'querystring';
import { CommunicationService } from '@communication_service'

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

  view:string = 'login-screen'

  constructor(private service:LoginService,
    private globalservice:CommunicationService){}

  $loginInfo(event:any){
    console.log("event", event);
    this.service.authenticate(event).subscribe((res:any) => {
      if(res){
        console.log("res")
        sessionStorage.setItem("user", JSON.stringify(res))

      this.globalservice.setUserData(res);
      }
      
    })

  }

  $viewScreen(event:any){
    this.view = event;
  }

}
