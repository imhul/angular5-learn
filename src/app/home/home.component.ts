import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public x = Math.random() * 34;
  public class = 'red';
  public blue = 'blue';

  constructor() { }

  ngOnInit() {
  }

  changeColor(color: string) {
    this.class = color
  }

}
