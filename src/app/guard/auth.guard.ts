import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from '@angular/router';
import {CommunicationService} from '@communication_service';
import { Injectable, inject } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })

/*export class AuthGurad implements CanActivate  {
  userInfo:any;
  constructor(private global:CommunicationService){
    console.log("sessionStorage.getItem", sessionStorage.getItem("user"))
    let data:any = sessionStorage.getItem("user")
    this.userInfo = JSON.parse(data)
    this.global.getUserData().subscribe((res:any) => {
      console.log("--------------", res)
    })
  }
  // authGuard: CanActivateFn = (route, state) => {
  //   console.log('route, state', route, state)
  //   return false;
  // };

  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('thi', this.userInfo)
    if(this.userInfo.role && this.userInfo.access_token && this.userInfo.email){
      return true
    }
    
    return false
    
  }


  

}*/

export const authGuard: CanActivateFn = (route, state) => {
  let userInfo:any;
  console.log('route, state', route, state)
  const communication_service = inject(CommunicationService)
  let data:any = sessionStorage.getItem("user")
  userInfo = JSON.parse(data)
  /*communication_service.getUserData().subscribe((res:any) => {
    console.log("--------------", res, userInfo)
    if(res){
    }
  })*/
  if(userInfo.role && userInfo.access_token && userInfo.email){
    return true
  }
  return false;
};



