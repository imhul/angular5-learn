import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RxjsService {

  constructor(private _http: HttpClient) { }

  public getRepos(event: KeyboardEvent) {
    return  this._http.get(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`);
  }
}
