import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute, Event, NavigationStart } from '@angular/router';
import { NotifyService } from '../services/notify/notify.service';

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
    private _userService: UserService, 
    private _route: ActivatedRoute,
    private _router: Router,
    private notify: NotifyService
    ) {
      this._route.queryParams.subscribe() // (params => console.info("UsersComponent params: ", params));
      this._route.data.subscribe() // (params => console.info("UserComponent data params: ", params))
  
      this._router.events.subscribe((e: Event) => {
        if(e instanceof NavigationStart) {
          console.info("_router event: ", e);
          this.sendMessage(`Router event is ${e}!`);
        }
      })
    }

  ngOnInit() {
    this.users = this._userService.getAll();
    this.sendMessage("User list is loaded from static data!");
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  getFromServer() {
    this._userService.getAllFromServer().subscribe(users => this.users = users);
    this.sendMessage("User list is loaded from server!");
  }

  getStaticList() {
    this.users = this._userService.getAll();
    this.sendMessage("User list is loaded from static data!");
  }

  removeUser(name: string) {
    this._userService.deleteUser(name);
    this.users = this._userService.getAll();
    this.sendMessage(`User ${name} is removed!`);
  }

  addUser(name: string) {
    if(!name) {
      this.sendMessage("Name is EMPTY!");
      return
    };
    this._userService.addNew(name);
    this.sendMessage(`New user ${name} is added!`);
    this.users = this._userService.getAll();
  }

  goToUser(id: any) {
    const currentUser = this.users.filter((user: any) => user.id === id)[0];
    // this._router.navigate(['users', id, { skipLocationChange: true }]);
    // or
    this._router.navigateByUrl(`users/${id}`).
      then(() => this.sendMessage(`Navigated to user ${currentUser.name}!`));
  }

  ngOnDestroy() {
    this.notify.destroy();
  }
}
