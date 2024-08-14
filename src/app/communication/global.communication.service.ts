import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
userDetail:any  = sessionStorage.getItem("user")?sessionStorage.getItem("user"):''
public userData = new BehaviorSubject<any>(JSON.parse(this.userDetail))
  constructor() { }


  setUserData(payload:any){
    this.userData.next(payload)
  }

  getUserData(){
    return this.userData
  }
}