import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-control-view',
  templateUrl: './custom-control-view.component.html',
  styleUrls: ['./custom-control-view.component.css']
})
export class CustomControlViewComponent implements OnInit {

  public customControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.customControl = new FormControl();
  }

}
