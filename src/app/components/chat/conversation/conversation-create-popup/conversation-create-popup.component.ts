import { map } from 'rxjs/operators';
import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { AuthorizeDto } from 'src/app/core/dtos/authorize.dto';
import { AuthorizeDtoProfile } from 'src/app/core/map-profiles/authorize-dto.profile';
import { FriendSelectModelProfile } from 'src/app/core/map-profiles/friend-select-model.profile';
import { FriendSelectModel } from 'src/app/core/models/friends/friend.select-model';
import { AccountService } from 'src/app/core/services/account.service';
import { ConversationService } from 'src/app/core/services/conversation.service';
import { MessageService } from 'src/app/core/services/message.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conversation-create-popup',
  templateUrl: './conversation-create-popup.component.html',
  styleUrls: ['./conversation-create-popup.component.less'],
})
export class ConversationCreatePopupComponent implements OnInit {
  @Input() isVisible: boolean;

  @Output() isVisibleChange = new EventEmitter<boolean>();

  friends: FriendSelectModel[] = [];

  private _user: AuthorizeDto;

  constructor(
    private _accountService: AccountService,
    private _conversationService: ConversationService,
    private _friendDataService: FriendDataService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._user = this._accountService.getUser();

    this.initSelectListItems();
  }

  create() {
    this.createConversation();
    this.deactiveConversation();
    this._messageService.messages = [];
    this.isVisibleChange.emit(!this.isVisible);
  }

  onChange(element: HTMLInputElement, item: FriendSelectModel) {
    item.isSelected = element.checked;
  }

  private createConversation() {
    this._messageService.conversation = {
      id: null,
      isActive: true,
      name: '',
      message: null,
      conversationMembers: this.friends
        .filter(x => x.isSelected)
        .map(x => FriendSelectModelProfile.mapToConversationMemberDto(x)),
    };

    this._messageService.conversation.conversationMembers.push(
      AuthorizeDtoProfile.mapToConversationMemberDto(this._user)
    );
  }

  private deactiveConversation() {
    const conversation = this._conversationService.conversations.find(x => x.isActive);

    if (conversation) {
      conversation.isActive = false;
    }
  }

  private initSelectListItems() {
    this._friendDataService
      .getsByUserId(this._user.id)
      .pipe(
        map(response => {
          return response.map<FriendSelectModel>(x => {
            return {
              id: x.id,
              isSelected: false,
              userid: x.userId,
              username: `${x.user.firstName} ${x.user.lastName}`,
            };
          });
        })
      )
      .subscribe(response => (this.friends = response));
  }
}
