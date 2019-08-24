import { Component, OnInit } from '@angular/core';
import { timer, combineLatest, zip, forkJoin, Observable } from 'rxjs';
import { take, concat, merge, startWith, withLatestFrom, pairwise, race, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent implements OnInit {

  public observe: Observable<any>;

  public timer1 = timer(1000, 4000).pipe(take(3));
  public timer2 = timer(2000, 4000).pipe(take(3));
  public timer3 = timer(3000, 4000).pipe(take(3));
  public timer4 = timer(0, 1000).pipe(take(3), mapTo('first'));
  public timer5 = timer(0, 100).pipe(take(3), mapTo('second'));

  constructor() { }

  ngOnInit() {
    // this.observe = combineLatest(this.timer1, this.timer2, this.timer3); // если все таймеры завершены, возвращает все их значения, с каждой итерацией добавляя новое в массив значений
    // this.observe = zip(this.timer1, this.timer2, this.timer3); // если все таймеры завершены, возвращает их параллельные значения
    // this.observe = forkJoin(this.timer1, this.timer2, this.timer3); // если все таймеры завершены, возвращает их последние значения

    // this.observe = this.timer4.pipe(concat(this.timer5)) // выводит последовательно значения timer4, а за тем timer5
    // this.observe = this.timer4.pipe(merge(this.timer5)) // выводит последовательно значения по мере поступления
    // this.observe = this.timer4.pipe(startWith(6)); // Первым выводит заданное значение 6
    // this.observe = this.timer4.pipe(withLatestFrom(this.timer5)); // результат дополнится значениями this.timer5
    // this.observe = this.timer4.pipe(pairwise()); // группирует соседние элементы
    this.observe = this.timer4.pipe(race(this.timer5)); // выводит значения того таймера, который сработает быстрее

    this.observe.subscribe({
      next: (next: number) => console.info("range: next: ", next),
      complete: () => console.info("range: Complete!"),
      error: (error: any) => console.info("range: error: ", error),
    });
  }

}
