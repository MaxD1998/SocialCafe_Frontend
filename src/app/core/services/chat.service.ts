import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { SocialChatClient } from '../clients/social-chat.client';
import { ConversationDataService } from '../data-services/conversation.data-service';
import { ConversationInputDto } from '../dtos/conversation/conversation.input-dto';
import { MessageInputDto } from '../dtos/message/message.input-dto';
import { ConversationDtoProfile } from '../map-profiles/conversation-dto.profile';
import { ConversationService } from './conversation.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private _conversationDataService: ConversationDataService,
    private _conversationService: ConversationService,
    private _messageService: MessageService,
    private _socialChatClient: SocialChatClient
  ) {}

  addMessage(dto: MessageInputDto) {
    if (dto.conversationId === null) {
      this.createConversation(this._messageService.conversation, dto);
    } else {
      this._socialChatClient.createMessage(dto);
    }
  }

  private createConversation(conversation: ConversationInputDto, message: MessageInputDto): void {
    this._conversationDataService
      .create(conversation)
      .pipe(map(value => ConversationDtoProfile.mapToConversationModel(value)))
      .subscribe(response => {
        this._messageService.conversation = response;
        this._conversationService.addConversation(response);
        message.conversationId = response.id;
        this._socialChatClient.createMessage(message);
      });
  }
}
