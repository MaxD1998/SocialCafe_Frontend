import { FriendModel } from 'src/app/core/models/friends/friend.model';

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friend-bubble',
  templateUrl: './friend-bubble.component.html',
  styleUrls: ['./friend-bubble.component.less'],
})
export class FriendBubbleComponent {
  @Input() friend: FriendModel;

  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  removeItem() {
    this.remove.emit(this.friend.id);
  }
}
