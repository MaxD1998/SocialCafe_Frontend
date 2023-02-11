import { Injectable } from '@angular/core';

import { MessageDto } from '../dtos/message/message.dto';
import { ConversationModel } from '../models/conversations/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  conversation: ConversationModel;
  messages: MessageDto[] = [];
  
  addMessage(dto: MessageDto) {
    this.messages = [dto].concat(this.messages);
  }

  constructor() { }
}
