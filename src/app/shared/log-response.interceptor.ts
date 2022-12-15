import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEventtype, HttpEvent. HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogResponseInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`LogResponseInterceptor - ${req.url}`);
        const started = Date.now();
        return next.handle(req).pipe(
            tap(event => {
                if (event.type === HttpEventType.Response) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                    console.log(event.body);
                }
            })
        );
    }
}