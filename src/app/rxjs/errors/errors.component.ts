import { Component, OnInit } from '@angular/core';
import { Observable, interval, throwError, of } from 'rxjs';
import { mergeMap, catchError, retry, retryWhen, delay } from 'rxjs/operators';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  public observe: Observable<any> = interval(1000).pipe(
    mergeMap((val: number) => { // вмерживает параллельно
      if(val > 3) return throwError('Error!');
      return of(val)
    }),
    // catchError(error => {
    //   console.info("Error: ", error);
    //   return of(false)
    // }),
    // retry(2), // задаёт количество попыток в случае ошибки
    retryWhen(observableError => observableError.pipe(delay(3000))) // повторит попытку через заданный интервал
  );

  constructor() { }

  ngOnInit() {
    this.observe.subscribe({
      next: (next: number) => console.info("errors: next: ", next),
      complete: () => console.info("errors: Complete!"),
      error: (error: any) => console.info("errors: error: ", error),
    });
  }

}
