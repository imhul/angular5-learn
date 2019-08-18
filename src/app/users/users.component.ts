import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public isShown = true;
  public users;
  public selectedUser;

  constructor(private _userService: UserService /* инстанс сервиса */) {}

  ngOnInit() {
    this.users = this._userService.getAll()
  }

  getFromServer() {
    this._userService.getAllFromServer().subscribe(users => this.users = users)
  }

  getStaticList() {
    this.users = this._userService.getAll()
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
