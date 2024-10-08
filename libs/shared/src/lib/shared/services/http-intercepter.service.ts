import { Injectable } from '@angular/core';
import { HttpContextToken, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const WITH_AUTHORIZATION = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.context.get(WITH_AUTHORIZATION) === true) {
      const idToken = localStorage.getItem('token');
      const request = req.clone({
        headers: idToken ? req.headers.set('Authorization', 'Bearer ' + idToken) : undefined
      });
      return next.handle(request);
    }

    return next.handle(req);
  }
}
