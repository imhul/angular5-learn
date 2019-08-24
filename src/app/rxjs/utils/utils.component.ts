import { Component, OnInit } from '@angular/core';
import { Observable, of, range, interval } from 'rxjs';
import { tap, delay, timeout, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.css']
})
export class UtilsComponent implements OnInit {

  // метод tap для сайдэффектов
  // метод delay позволяет задать задержку перед тем как отработает последовательность
  // метод timeout задаёт время, за которое должна отработать последовательность, иначе выдаст ошибку, например, если delay > timeout
  // метод finalize для постопераций в случае ошибки

  public observe: Observable<any> = range(0, 100).pipe(tap(n => console.info("tap: ", n * 11)));

  public observeError: Observable<any> = interval(1000).pipe(
    delay(5000), 
    tap(n => console.info("tap: ", n * 11)),
    timeout(3000),
    finalize(() => console.info("Finish!"))
  );

  constructor() { }

  ngOnInit() {
    this.observe.subscribe({
      next: (next: number) => console.info("utils: next: ", next),
      complete: () => console.info("utils: Complete!"),
      error: (error: any) => console.info("utils: error: ", error),
    });

    this.observeError.subscribe({
      next: (next: number) => console.info("utils: next: ", next),
      complete: () => console.info("utils: Complete!"),
      error: (error: any) => console.info("utils: error: ", error),
    });
  }

}
