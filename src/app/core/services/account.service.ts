import { ReplaySubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { AuthorizeDto } from '../models/authorize-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSource = new ReplaySubject<AuthorizeDto>(1);

  user$ = this.userSource.asObservable();

  setUser(dto: AuthorizeDto) {
    this.userSource.next(dto);
  }

  removeUser() {
    this.userSource.next(null);
  }

  hasUser() {
    return this.user$.pipe(
      map(user => {
        return user ? true : false;
      })
    );
  }
}
