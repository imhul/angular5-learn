import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user;

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      console.info("UserComponent params: ", params);
      this.user = this._userService.getUser(params.userId)
    })
  }

  ngOnInit() {}

}
