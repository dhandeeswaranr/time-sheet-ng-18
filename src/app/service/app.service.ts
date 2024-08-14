import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {urlPath} from '@path'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  validToken(payload:any){
    return this.http.post(urlPath.valid, payload)
  }
}
