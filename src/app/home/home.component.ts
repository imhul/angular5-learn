import { Component, OnDestroy } from '@angular/core';
import { NotifyService } from '../services/notify/notify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  public x = Math.random() * 14;
  public class = 'red';
  public blue = 'blue';

  constructor(private notify: NotifyService) { }

  ngOnInit() {
    this.sendMessage(`Rondom number is ${this.x}`)
  }

  changeColor(color: string) {
    this.class = color;
    this.sendMessage(`New color is ${color !== '' ? color : "EMPTY!"}`)
  }

  newNum() {
    this.x = Math.random() * 88;
    this.sendMessage(`New rondom number is ${this.x}`)
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}
