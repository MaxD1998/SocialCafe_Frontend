import { Injectable } from '@angular/core';

import { MessageDto } from '../dtos/message/message.dto';
import { ConversationService } from './conversation.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  constructor(
    private _conversationService: ConversationService,
    private _messageService: MessageService) {
  }

  async addMessageAsync(dto: MessageDto) {
    let conversation = this._conversationService.conversations.find(x => x.id == dto.conversationId);

    if (conversation == null) {
      // conversation = await this.get<ConversationDto>(ConversationAddressConst.GetId + dto.conversationId).toPromise();
      // this._conversationService.conversations.push(conversation);
    }

    if (!conversation.isActive) {
      return;
    }

    this._messageService.messages.push(dto);
  }
}
