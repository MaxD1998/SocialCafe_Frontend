import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { ConversationAddressConst } from '../constants/conversation-address-const';
import { AuthorizeDto } from '../models/authorize.dto';
import { ConversationDto } from '../models/conversation/conversation.dto';
import { AccountService } from './account.service';
import { BaseService } from './bases/base.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService extends BaseService {

  private _conversations: ConversationDto[] = [];

  constructor(private accountService: AccountService,
    http: HttpClient) {
    super(http);
  }
  
  get conversations(): ConversationDto[] {
    return this._conversations
  }

  addConversation(item: ConversationDto) {
    this.deleteIfConversationExist(item);
    this._conversations.push(item);
  }

  getConversations() {
    let user = this.accountService.getUser();
    this.get<ConversationDto[]>(ConversationAddressConst.GetUserId + user.id)
      .subscribe(response => {
        this._conversations = response;
      })
  }

  private deleteIfConversationExist(item: ConversationDto) {
    let index = this._conversations.findIndex(x => x.id == item.id);

    if (index > -1) {
      this._conversations.splice(index, 1);
    }
  }
}
