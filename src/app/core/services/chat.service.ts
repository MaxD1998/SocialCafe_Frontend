import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConversationAddressConst } from '../constants/conversation-address-const';
import { ConversationDto } from '../models/conversation/conversation.dto';
import { MessageDto } from '../models/message/message.dto';
import { BaseService } from './bases/base.service';
import { ConversationService } from './conversation.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends BaseService {
  
  constructor(private conversationService: ConversationService,
    private messageService: MessageService,
    http: HttpClient) {
    super(http);
  }

  async addMessageAsync(dto: MessageDto) {
    let conversation = this.conversationService.conversations.find(x => x.id == dto.conversationId);

    if (conversation == null) {
      conversation = await this.get<ConversationDto>(ConversationAddressConst.GetId + dto.conversationId).toPromise();
      this.conversationService.conversations.push(conversation);
    }

    if (!conversation.isActive) {
      return;
    }

    this.messageService.messages.push(dto);
  }
}
