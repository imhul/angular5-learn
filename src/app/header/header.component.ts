import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public x = Math.random() * 34;
  public class = 'red';
  public blue = 'blue';
  public users;
  public isShown = true;
  public selectedUser;
  private _userService;

  constructor(userService: UserService) {

    this._userService = userService;
    // setTimeout(() => {
    //   this.classRed = 'green';
    //   setTimeout(() => {
    //     this.classRed = 'blue';
    //   }, 2000)
    // }, 2000)
  }

  ngOnInit() {
    this.users = this._userService.getAll()
  }

  changeColor(color) {
    this.class = color
  }

}