import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public isShown = true;
  public users;
  public selectedUser;

  constructor(
    private _userService: UserService /* инстанс сервиса */, 
    private route: ActivatedRoute,
    private _router: Router
    ) {
      this.route.queryParams.subscribe(params => console.info("UsersComponent params: ", params));
      this.route.data.subscribe(params => console.info("UserComponent data params: ", params))
    }

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

  goToUser(id: any) {
    // this._router.navigate(['users', id, { skipLocationChange: true }]);
    // or
    this._router.navigateByUrl(`users/${id}`).
      then(() => console.info("then() is working!"));
  }
}
