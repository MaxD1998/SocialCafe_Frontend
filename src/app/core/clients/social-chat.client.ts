import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { ConversationDataService } from '../data-services/conversation.data-service';
import { MessageDto } from '../dtos/message/message.dto';
import { MessageInputDto } from '../dtos/message/message.input-dto';
import { ConversationDtoProfile } from '../map-profiles/conversation-dto.profile';
import { ConversationModelProfile } from '../map-profiles/conversation-model.profile copy';
import { AccountService } from '../services/account.service';
import { ConversationService } from '../services/conversation.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class SocialChatClient {

  private _hubConnection: HubConnection;

  constructor(
    private _accountService: AccountService, 
    private _conversationDataService: ConversationDataService,
    private _conversationService: ConversationService,
    private _messageService: MessageService) { }

  connect() {
    let user = this._accountService.getUser();
    
    if (user == null) {
      return;
    }

    this._hubConnection = new HubConnectionBuilder()
      .withAutomaticReconnect()
      .withUrl(environment.socialChat, {
        accessTokenFactory: () => user.token,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .build();

    this._hubConnection.start();
    
    this.registerRecieveMessageHandler(this._hubConnection);
  }

  createMessage(dto: MessageInputDto) {
    this._hubConnection.invoke("CreateMessageAsync", dto);
  }

  disconnect() {
    this._hubConnection.stop();
  }
  
  private registerRecieveMessageHandler(hubConnection: HubConnection) {
    hubConnection.on("RecieveMessageHandler", (response: MessageDto) => {
      const conversationId = this._messageService.conversation?.id;
      if (response.conversationId === conversationId) {
        this._messageService.addMessage(response);
      }

      const conversation = this._conversationService.conversations.find(x => x.id === response.conversationId)
      if (conversation) {
        conversation.message = response;
        this._conversationService.addConversation(conversation);
      } else {
        this._conversationDataService.getById(response.conversationId)
          .pipe(map(response => ConversationDtoProfile.mapToConversationModel(response)))
          .subscribe(response => {
            this._conversationService.addConversation(response);
          });
      }
    })
  }
}
