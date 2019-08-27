import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private notify: NotifyService) { }

  ngOnInit() {
    this.sendMessage("Admin component is loaded!")
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}
