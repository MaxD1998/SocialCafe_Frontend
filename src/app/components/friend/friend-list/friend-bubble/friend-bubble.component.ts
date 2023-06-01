import { FriendModel } from 'src/app/core/models/friends/friend.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentRoute } from 'src/app/core/constants/routes/component.route';

@Component({
  selector: 'app-friend-bubble',
  templateUrl: './friend-bubble.component.html',
  styleUrls: ['./friend-bubble.component.less'],
})
export class FriendBubbleComponent {
  @Input() friend: FriendModel;

  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _router: Router) {}

  removeItem(): void {
    this.remove.emit(this.friend.id);
  }

  navigate(): void {
    this._router.navigateByUrl(`${ComponentRoute.userDetailsId}${this.friend.userid}`);
  }
}
