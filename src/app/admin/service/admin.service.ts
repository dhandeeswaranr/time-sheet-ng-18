import { Injectable } from '@angular/core';
import {urlPath} from '../../api-urls/api.const'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getallUser(){
    return this.http.get(urlPath.userDetail);
  }
}
