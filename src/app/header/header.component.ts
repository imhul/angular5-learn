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
  // private _userService; // инстанс сервиса  

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.users = this._userService.getAll()
  }

  getFromServer() {
    this._userService.getAllFromServer().subscribe(users => this.users = users)
  }

  getStaticList() {
    this.users = this._userService.getAll()
  }

  changeColor(color: string) {
    this.class = color
  }

  removeUser(name: string) {
    this._userService.deleteUser(name);
    this.users = this._userService.getAll()
  }

  addUser(name: string) {
    if(!name) {
      console.warn("Name is empty!");
      return
    };
    this._userService.addNew(name);
    this.users = this._userService.getAll()
  }

}