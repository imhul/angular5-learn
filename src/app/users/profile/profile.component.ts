import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private notify: NotifyService) { }

  ngOnInit() {
    this.sendMessage("User Profile is loaded!")
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}
