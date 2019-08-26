import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { tap, delay, timeout, finalize } from 'rxjs/operators';
// BehaviorSubject - передает новому подписчику последнее значение, в качестве аргумента принимает начальное значение.
// ReplaySubject - передает новому подписчику все предыдущие значения, принимаемый параметр - количество предыдущих значений.
// AsyncSubject - передает новому подписчику последнее значение, но только после того, как будет вызван метод complete().

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private subj = new Subject<any>();

  constructor() { }

  send(message: string): void {
    this.subj.next(message);
  }

  destroy(): void {
      this.subj.next();
  }

  getMessage(): Observable<any> {
      return this.subj.asObservable();
  }
}
