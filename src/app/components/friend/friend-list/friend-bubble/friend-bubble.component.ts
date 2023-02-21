import { FriendDto } from 'src/app/core/dtos/friend/friend.dto';
import { FriendModel } from 'src/app/core/models/friends/friend.model';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-bubble',
  templateUrl: './friend-bubble.component.html',
  styleUrls: ['./friend-bubble.component.css']
})
export class FriendBubbleComponent implements OnInit {
  @Input() friend: FriendModel;

  constructor() { }

  ngOnInit(): void {
  }
}
