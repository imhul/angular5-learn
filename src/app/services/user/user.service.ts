import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {name: 'John 1'},
    {name: 'John 2'},
    {name: 'John 3'},
    {name: 'John 4'},
    {name: 'John 5'},
  ];

  constructor() { }

  public getAll() {
    return this.users;
  }
}