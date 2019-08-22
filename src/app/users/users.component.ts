import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute, Event, NavigationStart } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public isShown = true;
  public users;
  public selectedUser;
  public customControl: FormControl;

  constructor(
    private _userService: UserService, 
    private _route: ActivatedRoute,
    private _router: Router
    ) {
      this._route.queryParams.subscribe() // (params => console.info("UsersComponent params: ", params));
      this._route.data.subscribe() // (params => console.info("UserComponent data params: ", params))
  
      this._router.events.subscribe((e: Event) => {
        if(e instanceof NavigationStart) {
          console.info("_router event: ", e);
        }
      })
    }

  ngOnInit() {
    this.users = this._userService.getAll();

    this.customControl = new FormControl();
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
