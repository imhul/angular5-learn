import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';


export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
      const loadRoute = (delay: any) => delay
        ? timer(3000).pipe(flatMap(_ => load()))
        : load();
      return route.data && route.data.preload
        ? loadRoute(route.data.delay)
        : of(null);
    }
}