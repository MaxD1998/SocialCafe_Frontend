import { FriendDto } from 'src/app/core/dtos/friend/friend.dto';
import { FriendModel } from 'src/app/core/models/friends/friend.model';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-friend-bubble',
  templateUrl: './friend-bubble.component.html',
  styleUrls: ['./friend-bubble.component.css']
})
export class FriendBubbleComponent {
  @Input() friend: FriendModel;

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  removeItem() {
    this.remove.emit(this.friend.id);
  }
}
