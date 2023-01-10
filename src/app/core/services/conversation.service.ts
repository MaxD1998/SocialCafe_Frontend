import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConversationDataService } from '../data-services/conversation.data-service';
import { ConversationDto } from '../models/conversation/conversation.dto';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private _conversations: ConversationDto[] = [];

  constructor(
    private _accountService: AccountService,
    private _conversatonDataService: ConversationDataService) {
  }
  
  get conversations(): ConversationDto[] {
    return this._conversations
  }

  addConversation(item: ConversationDto) {
    this.deleteIfConversationExist(item);
    this._conversations.push(item);
  }

  getConversations() {
    let user = this._accountService.getUser();
    this._conversatonDataService.getConversationsByUserId(user.id)
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
