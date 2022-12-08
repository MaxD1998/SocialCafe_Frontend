import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConversationAddressConst } from '../constants/conversation-address-const';
import { ConversationDto } from '../models/conversation-dto';
import { MessageDto } from '../models/message-dto';
import { BaseService } from './bases/base.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends BaseService {
  conversations: ConversationDto[] = [];
  messages: MessageDto[] = [];
  
  constructor(http: HttpClient) {
    super(http);
  }

  async addMessageAsync(dto: MessageDto) {
    let conversation = this.conversations.find(x => x.id == dto.conversationId);

    if (conversation == null) {
      conversation = await this.get<ConversationDto>(ConversationAddressConst.GetId + dto.conversationId).toPromise();
      this.conversations.push(conversation);
    }

    if (!conversation.isActive) {
      return;
    }

    this.messages.push(dto);
  }
}
