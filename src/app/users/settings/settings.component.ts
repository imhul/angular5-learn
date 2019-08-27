import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private notify: NotifyService) { }

  ngOnInit() {
    this.sendMessage("User Settings is loaded!")
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}
