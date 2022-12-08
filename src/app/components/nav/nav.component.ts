import { ComponentAddressConst } from 'src/app/core/constants/component-address-const';
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
    private accountService: AccountService, 
    private authorizationService: AuthorizationService,
    private router: Router) { }

  ngDoCheck(): void {
    this.isSignedIn = this.accountService.isSignedIn();
    this.username = this.getUsername();
  }
  

  logout(): void {
    this.authorizationService.logout();
    this.router.navigateByUrl(ComponentAddressConst.login);
  }

  private getUsername(): string {
    let user = this.accountService.getUser();

    if(user != null) {
      return user.username
    }

    return null;
  }

}
