import { ComponentRoute } from 'src/app/core/constants/routes/component.route';
import { AccountService } from 'src/app/core/services/account.service';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements DoCheck {
  ComponentRoute: typeof ComponentRoute = ComponentRoute;
  userDetailsRoute: string = ComponentRoute.userDetailsId;

  isSignedIn: boolean;
  username: string;

  constructor(
    private _accountService: AccountService,
    private _authorizationService: AuthorizationService,
    private _router: Router
  ) {}

  ngDoCheck(): void {
    this.isSignedIn = this._accountService.isSignedIn();
    if (this.isSignedIn) {
      const user = this._accountService.getUser();
      this.username = user.username;
      this.userDetailsRoute = `${ComponentRoute.userDetailsId}${user.id}`;
    }
  }

  logout(): void {
    this._authorizationService.logout();
    this._router.navigateByUrl(ComponentRoute.login);
  }
}
