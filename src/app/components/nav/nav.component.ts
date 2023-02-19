import { ComponentRoute } from 'src/app/core/constants/routes/component.route';
import { AccountService } from 'src/app/core/services/account.service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck {

  isSignedIn: boolean
  username: string 

  constructor(
    private _accountService: AccountService, 
    private _authorizationService: AuthorizationService,
    private _router: Router) { }

  ngDoCheck(): void {
    this.isSignedIn = this._accountService.isSignedIn();
    this.username = this.getUsername();
  }
  

  logout(): void {
    this._authorizationService.logout();
    this._router.navigateByUrl(ComponentRoute.login);
  }

  private getUsername(): string {
    let user = this._accountService.getUser();

    if(user != null) {
      return user.username
    }

    return null;
  }

}
