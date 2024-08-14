import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {urlPath} from '../../api-urls/api.const'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  authenticate(payload:any){
    return this.http.post(urlPath.login, payload)
  }
}
