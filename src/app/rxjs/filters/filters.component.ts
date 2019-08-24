import { Component, OnInit } from '@angular/core';
import { range, timer, from } from 'rxjs';
import { 
  filter, 
  first, 
  last, 
  single, 
  ignoreElements, 
  debounce, 
  debounceTime,
  distinctUntilChanged,
  throttle,
  throttleTime,
  audit,
  auditTime,
  skip,
  skipWhile,
  skipUntil,
  skipLast,
  take,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  // pipe() Метод, содержащий все операции, которые я хочу применить к последовательности
  // public observe = range(0, 100).pipe(filter(f => f > 91)); // работает как обычный filter
  // public observe = range(0, 100).pipe(ignoreElements()); // игнорирует любые отфильтрованные значения
  // public observe = range(0, 100).pipe(first(f => f > 91)); // выводит первое отфильтрованное значение
  // public observe = range(0, 100).pipe(last(f => f > 91)); // выводит последнее отфильтрованное значение
  // public observe = range(0, 100).pipe(single(f => f > 91)); // выдаёт ошибку, если результат фильтрации содержит более одного значения
  // public observe = range(0, 100).pipe(debounce((num: number) => timer(9999 * num, num * 1000) )); // Вернёт значения, которые отработают спустя заданное время
  // public observe = range(0, 100).pipe(debounceTime(1000)); // Вернёт значения, которые отработают спустя заданное время
  // public observe = from([1,1,1,1,2,2,2,2,4,4,4,4,6]).pipe(distinctUntilChanged()); // Выдаст только уникальные значения
  // public observe = from([1,1,1,1,2,2,2,2,4,4,4,4,6]).pipe(throttleTime(1000)); // вернёт только первое значение, а остальные будет игнорировать в течении заданного времени
  // TODO:
  //    public observe = timer(0, 200).pipe(throttleTime(1000)); // каждую секунду возвращает значение, полученное из timer
  //    public observe = timer(0, 200).pipe(auditTime(1000)); // каждую секунду возвращает значение, полученное из timer
  // 
  // public observe = range(0, 100).pipe(skip(80)); // Пропускает заданное количество элементов
  // public observe = range(0, 100).pipe(take(80)); // Вернёт заданное количество первых элементов
  // public observe = range(0, 100).pipe(takeUntil(timer(10))); // Вернёт заданное количество первых элементов, пока отработает таймер, если функция будет асинхронной

  // *******************************************//
  // **** в ...Until передаётся Observable, ****//
  // **** а в ...While передаётся collback  ****//
  // *******************************************//

  public observe = range(0, 100).pipe(takeWhile(num => num < 50)); // Работает как filter для первых элементов

  constructor() { }

  ngOnInit() {
    this.observe.subscribe({
      next: (next: number) => console.info("range: next: ", next),
      complete: () => console.info("range: Complete!"),
      error: (error: any) => console.info("range: error: ", error),
    });
  }

}
