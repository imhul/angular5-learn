import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';

@Injectable()
export class UserMiddleware implements HttpInterceptor {

  intercept(req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> { 
    const request = req.clone({ params: req.params.set('x', '19') })
    return next.handle(request)
      // .catch(error => {
      //   if(error.status === '401') {
      //     console.info("REDIRECT LOGIN")
      //   }
      //   return Observable.throw(error)
      // })
  }
}
