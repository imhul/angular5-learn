import { Component, OnInit } from '@angular/core';
import { pluck, reduce, scan } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {

  // public observe = of(1, 2, 100, 14).pipe(reduce((accum, current) => accum + current)); // Работает как обычный reduce в js
  // public observe = of({name: "John"}).pipe(pluck('name')); // Выводит заданное значените
  public observe = of(1, 2, 100, 14).pipe(scan((accum, val) => accum + val)); // Работает как обычный reduce, но выводит значение на каждом промежуточном шаге суммирования

  constructor() { }

  ngOnInit() {
    this.observe.subscribe({
      next: (next: any) => console.info("range: next: ", next),
      complete: () => console.info("range: Complete!"),
      error: (error: any) => console.info("range: error: ", error),
    });
  }

}
