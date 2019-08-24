import { Component, OnInit } from '@angular/core';
import { 
  Observable, 
  Observer, 
  of, 
  from, 
  fromEvent, 
  timer, 
  interval, 
  range, 
  empty, 
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.css']
})
export class FabricComponent implements OnInit {

  public observeCreate = Observable.create((observer: Observer<string>) => {
    observer.next('Hello!');
    observer.next('Hello!');
    observer.next('Hello!');
    observer.complete()
  });
  public observeOf = of(6, 66, 666);
  public observeFrom = from([6, 66, 666]);
  public observeFromPromise = from(Promise.resolve(6));
  public observeFromEvent = fromEvent(document.body, 'click');
  public observeTimer = timer(5000, 2000);
  public observeInterval = interval(1000);
  public observeRange = range(0, 10);
  public observeEmpty = empty();
  public observeThrowError = throwError("Some error!");

  constructor() { }

  ngOnInit() {
    this.observeCreate.subscribe({
      next: (next: string) => console.info("create: next: ", next),
      complete: () => console.info("create: Complete!"),
      error: (error: any) => console.info("create: error: ", error),
    });

    this.observeOf.subscribe({
      next: (next: number) => console.info("of: next: ", next),
      complete: () => console.info("of: Complete!"),
      error: (error: any) => console.info("of: error: ", error),
    });

    this.observeFrom.subscribe({
      next: (next: number) => console.info("from: next: ", next),
      complete: () => console.info("from: Complete!"),
      error: (error: any) => console.info("from: error: ", error),
    });

    this.observeFromPromise.subscribe({
      next: (next: number) => console.info("fromPromise: next: ", next),
      complete: () => console.info("fromPromise: Complete!"),
      error: (error: any) => console.info("fromPromise: error: ", error),
    });

    this.observeFromEvent.subscribe({
      next: (next: MouseEvent) => console.info("fromEvent: next: ", next),
      complete: () => console.info("fromEvent: Complete!"),
      error: (error: any) => console.info("fromEvent: error: ", error),
    });

    // Timers

    // this.observeTimer.subscribe({
    //   next: (next: number) => console.info("timer: next: ", next),
    //   complete: () => console.info("timer: Complete!"),
    //   error: (error: any) => console.info("timer: error: ", error),
    // });

    // this.observeInterval.subscribe({
    //   next: (next: number) => console.info("interval: next: ", next),
    //   complete: () => console.info("interval: Complete!"),
    //   error: (error: any) => console.info("interval: error: ", error),
    // });

    this.observeRange.subscribe({
      next: (next: number) => console.info("range: next: ", next),
      complete: () => console.info("range: Complete!"),
      error: (error: any) => console.info("range: error: ", error),
    });

    this.observeEmpty.subscribe({
      next: (next: void) => console.info("empty: next: ", next),
      complete: () => console.info("empty: Complete!"),
      error: (error: any) => console.info("empty: error: ", error),
    });

    this.observeThrowError.subscribe({
      next: (next: string) => console.info("throwError: next: ", next),
      complete: () => console.info("throwError: Complete!"),
      error: (error: any) => console.info("throwError: error: ", error),
    });
  }

}
