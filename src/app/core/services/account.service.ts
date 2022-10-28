import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AuthorizeDto } from '../models/authorize-dto';

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
}
