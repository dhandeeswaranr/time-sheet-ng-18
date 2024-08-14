import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  //constructor(@Inject(PLATFORM_ID) private platformId:object) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let storedToken:any = sessionStorage.getItem('user')
     let jwtToken = JSON.parse(storedToken);
     
     let authreq:any
     console.log("set", jwtToken)
     if(jwtToken){
     authreq = req.clone({
      setHeaders:{
        'Authorization': `Bearer ${jwtToken.access_token}`
      }
     });
    }else{
      authreq = req.clone({
        setHeaders:{
          'Authorization': `Bearer 123`,
          'accept':'application/json'

        }
       });
    }
    
     return next.handle(authreq)

  }

}
