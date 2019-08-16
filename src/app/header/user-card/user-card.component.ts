import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @Output() userSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectUser() {
    this.userSelect.emit()
  }

}
