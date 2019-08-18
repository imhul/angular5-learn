import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this.users;
  }

  public getAllFromServer() {
    return  this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public deleteUser(name: string) {
    console.info("deleteUser name: ", name)
    return this.users = this.users.filter(user => user.name !== name);
  }

  public addNew(name: string) {
    return this.users.push({name});
  }
}