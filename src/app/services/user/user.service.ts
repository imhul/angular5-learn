import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import uuidv5 from 'uuid/v5';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {name: 'John 1', id: '5a5b9ef4-2649-5354-998c-2043a906fac4'},
    {name: 'John 2', id: '8ece2c62-0c31-5c55-b7c6-155381e3780e'},
    {name: 'John 3', id: '9c3681d2-ce20-502f-a45f-c75523889401'},
    {name: 'John 4', id: 'f7dd7bc3-6b27-5065-8c78-6bf2c42eaf8c'},
    {name: 'John 5', id: '18e08e13-739b-52f1-af78-5989363de7a2'},
  ];

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this.users;
  }

  public getUser(id: string) {
    const user = this.users.filter(user => user.id === id);
    return user[0];
  }

  public getAllFromServer() {
    return  this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public deleteUser(name: string) {
    console.info("deleteUser name: ", name)
    return this.users = this.users.filter(user => user.name !== name);
  }

  public addNew(name: string) {
    const arr = new Array(16);
    const id = uuidv5(name, arr);
    return this.users.push({name, id});
  }
}