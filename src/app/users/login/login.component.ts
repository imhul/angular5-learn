import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private notify: NotifyService) { }

  ngOnInit() {
    this.sendMessage("Login popup is loaded!")
  }

  close() {
    this.sendMessage("Login popup is closed!");
    setTimeout(() => {
      this._router.navigate([
        ".", 
        { outlets: { popup: null } }
      ]);
    }, 1000)
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}
