import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HubConnection } from '@microsoft/signalr';

import { BaseClient } from '../bases/base.client';
import { ConversationDataService } from '../data-services/conversation.data-service';
import { MessageDto } from '../dtos/message/message.dto';
import { MessageInputDto } from '../dtos/message/message.input-dto';
import { ConversationDtoProfile } from '../map-profiles/conversation-dto.profile';
import { AccountService } from '../services/account.service';
import { ConversationService } from '../services/conversation.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class SocialChatClient extends BaseClient {
  constructor(
    private _conversationDataService: ConversationDataService,
    private _conversationService: ConversationService,
    private _messageService: MessageService,
    accountService: AccountService
  ) {
    super(accountService);
  }

  protected get url(): string {
    return environment.socialChat;
  }

  createMessage(dto: MessageInputDto) {
    this._hubConnection.invoke('CreateMessageAsync', dto);
  }

  private registerGetMessage(hubConnection: HubConnection) {
    hubConnection.on('GetMessage', (response: MessageDto) => {
      const conversationId = this._messageService.conversation?.id;
      if (response.conversationId === conversationId) {
        this._messageService.addMessage(response);
      }

      const conversation = this._conversationService.conversations.find(x => x.id === response.conversationId);
      if (conversation) {
        conversation.message = response;
        this._conversationService.addConversation(conversation);
      } else {
        this._conversationDataService
          .getById(response.conversationId)
          .pipe(map(response => ConversationDtoProfile.mapToConversationModel(response)))
          .subscribe(response => {
            this._conversationService.addConversation(response);
          });
      }
    });
  }

  protected registerMethods(): void {
    this.registerGetMessage(this._hubConnection);
  }
}
