import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }

  isAuth() {
    return of(true)
  }
}
