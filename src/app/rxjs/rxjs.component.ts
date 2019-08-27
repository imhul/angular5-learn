import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../services/notify/notify.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private notify: NotifyService) { }

  ngOnInit() {
    this.sendMessage("RxJs Component is loaded!")
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}
