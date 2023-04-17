import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request.clone({
      headers: request.headers.set('Authorization','Bearer ' + localStorage.getItem('token'))
   })

//    newRequest = request.clone({
//     headers: request.headers.set('Access-Control-Allow-Origin','*' )
//  })
    return next.handle(newRequest);
  }
}
