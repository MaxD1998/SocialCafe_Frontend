import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanDeactivate<unknown>  {

  constructor(private accountService: AccountService) {
  }

  canActivate(): Observable<boolean> {
    return this.accountService.user$.pipe(
      map(user => {
        return user ? true : false;
      })
    );
  }
  
  canDeactivate(): Observable<boolean> {
    return this.accountService.user$.pipe(
      map(user => {
        return user ? false : true;
      })
    );
  }

}
