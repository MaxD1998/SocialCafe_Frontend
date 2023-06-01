import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentRoute } from 'src/app/core/constants/routes/component.route';
import { FriendDto } from 'src/app/core/dtos/friend/friend.dto';

@Component({
  selector: 'app-friend-bubble',
  templateUrl: './friend-bubble.component.html',
  styleUrls: ['./friend-bubble.component.less'],
})
export class FriendBubbleComponent implements OnInit {
  @Input() friend: FriendDto = null;

  username: string = null;

  constructor(private _router: Router) {
    _router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    this.username = `${this.friend.user.firstName} ${this.friend.user.lastName}`;
  }

  navigate() {
    this._router.navigateByUrl(`${ComponentRoute.userDetailsId}${this.friend.userId}`);
  }
}
