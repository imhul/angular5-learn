import { Component, OnInit } from '@angular/core';
import { 
  pluck, 
  reduce, 
  scan, 
  map, 
  flatMap, 
  switchMap, 
  exhaust, 
  exhaustMap,
  concateMap,
} from 'rxjs/operators';
import { range, of, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  // public observe = of({name: "John"}).pipe(pluck('name')); // Выводит заданное значените
  // public observe = of(1, 2, 100, 14).pipe(reduce((accum, current) => accum + current)); // Работает как обычный reduce в js
  // public observe = of(1, 2, 100, 14).pipe(scan((accum, val) => accum + val)); // Работает как обычный reduce, но выводит значение на каждом промежуточном шаге суммирования

  // public observe = range(0, 100).pipe(map(item => item));
  // mapTo - короткая запись метода map, когда все значения нужно поменять на другое

  public clicks = fromEvent(document, 'click');
  // public observe = this.clicks.pipe(flatMap(_ => interval(1000))); // flatMap === mergeMap, вмерживает параллельно
  // concateMap вмерживает как flatMap, но последовательно
  // public observe = this.clicks.pipe(switchMap(_ => interval(1000))); // Останавливает текущий таймер и запускает новый
  public observe = this.clicks.pipe(exhaustMap(_ => interval(1000))); // Продолжает выполнять текущий таймер
  
  
  constructor() { }

  ngOnInit() {
    this.observe.subscribe({
      next: (next: any) => console.info("range: next: ", next),
      complete: () => console.info("range: Complete!"),
      error: (error: any) => console.info("range: error: ", error),
    });
  }

}
