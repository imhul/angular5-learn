import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { RxjsService } from '../../services/rxjs/rxjs.service';

@Component({
  selector: 'app-rxjs-intro',
  templateUrl: './rxjs-intro.component.html',
  styleUrls: ['./rxjs-intro.component.css']
})
export class RxjsIntroComponent implements OnInit {

  @ViewChild('rxInput', {static: false}) rxInput: ElementRef<any>;

  public observe;
  public total: string;

  constructor(private _rxjsService: RxjsService) { }

  init() {
    this.observe.pipe(debounceTime(500), switchMap((event: KeyboardEvent) => {
      return this._rxjsService.getRepos(event);
    })).subscribe(response => this.total = response.total_count);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.observe = fromEvent(this.rxInput.nativeElement, 'input');
    this.init()
  }

}
