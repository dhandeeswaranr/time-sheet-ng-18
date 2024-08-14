import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let storedToken:any = sessionStorage.getItem('user')
  let jwtToken = JSON.parse(storedToken);
  const reqCopy = req.clone()
  reqCopy.headers.set('Authorization',jwtToken.access_token)
  let header = new HttpHeaders({
    Authorization: jwtToken.access_token
   })
   console.log("set", jwtToken)
    req = req.clone({
      headers:req.headers.set(
        'Authorization',jwtToken.access_token
      )
     });
   
  return next(req);
};
