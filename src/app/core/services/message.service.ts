import { Injectable } from '@angular/core';

import { MessageDto } from '../dtos/message/message.dto';
import { ConversationNameHelper } from '../helpers/conversation-name.helper';
import { ConversationModelProfile } from '../map-profiles/conversation-model.profile copy';
import { ConversationModel } from '../models/conversations/conversation.model';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: MessageDto[] = [];

  private _conversation: ConversationModel;
  
  get conversation(): ConversationModel{
    const user = this._accountService.getUser();
    const result = ConversationModelProfile.mapToConversationModel(this._conversation)
    result.name = ConversationNameHelper.setName(result, user.id);
    
    return result;
  }

  set conversation(item: ConversationModel) {
    this._conversation = item;
  }

  constructor(private _accountService: AccountService) { }

  addMessage(dto: MessageDto) {
    this.messages = [dto].concat(this.messages);
  }
}
