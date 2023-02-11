import { map } from 'rxjs/operators';
import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import {
    ConversationMemberDto
} from 'src/app/core/dtos/conversation-member/conversation-member.dto';
import { FriendSelectModel } from 'src/app/core/models/friends/friend.select-model';
import { AccountService } from 'src/app/core/services/account.service';
import { ConversationService } from 'src/app/core/services/conversation.service';
import { MessageService } from 'src/app/core/services/message.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-conversation-popup',
  templateUrl: './new-conversation-popup.component.html',
  styleUrls: ['./new-conversation-popup.component.css']
})
export class NewConversationPopupComponent implements OnInit {
  @Input() isVisible: boolean;

  @Output() isVisibleChange = new EventEmitter<boolean>();

  friends: FriendSelectModel[] = [];

  private userId: number;

  constructor(
    private _accountService: AccountService, 
    private _conversationService: ConversationService,
    private _friendDataService: FriendDataService,
    private _messageService: MessageService) { }

  ngOnInit(): void {
    const user = this._accountService.getUser();
    this.userId = user.id;

    this.initSelectListItems();
  }
  
  create() {
    this._messageService.conversation = {
      id: 0,
      isActive: true,
      name: "",
      message: null,
      conversationMembers: this.friends
        .filter(x => x.isSelected)
        .map(x => {
          return this.mapToConversationMember(x.userid)
        })
    }

    this._messageService.conversation.conversationMembers
      .push(this.mapToConversationMember(this.userId));

    const conversation = this._conversationService.conversations.find(x => x.isActive)

    if (conversation) {
      conversation.isActive = false;
    }

    this.isVisibleChange.emit(!this.isVisible);
  }

  onChangeHandler(element: HTMLInputElement, item: FriendSelectModel) {
    item.isSelected = element.checked;
  }

  private initSelectListItems()
  {
    this._friendDataService.getsByUserId(this.userId)
      .pipe(map(response => {
        return response.map<FriendSelectModel>(x => {
          return {
            id: x.id,
            isSelected: false,
            userid: x.userId,
            username: `${x.user.firstName} ${x.user.lastName}`,
          }
        });
      }))
      .subscribe(response => this.friends = response);
  }

  private mapToConversationMember(id: number) {
    return {
      conversationId: 0,
      id: 0,
      nick: "",
      user: null,
      userId: id
    }
  }
}
