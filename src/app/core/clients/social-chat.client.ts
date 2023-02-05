import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { MessageDto } from '../dtos/message/message.dto';
import { AccountService } from '../services/account.service';
import { ChatService } from '../services/chat.service';

@Injectable({
  providedIn: 'root'
})
export class SocialChatClient {

  private hubConnection: HubConnection;

  constructor(
    private accountService: AccountService, 
    private messageService: ChatService) { }

  connect() {
    let user = this.accountService.getUser();
    
    if (user == null) {
      return;
    }

    this.hubConnection = new HubConnectionBuilder()
      .withAutomaticReconnect()
      .withUrl(environment.socialChat, {
        accessTokenFactory: () => user.token,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .build();

    this.hubConnection.start();
    
    this.registerRecieveMessageHandler(this.hubConnection);
  }

  disconnect() {
    this.hubConnection.stop();
  }
  
  private registerRecieveMessageHandler(hubConnection: HubConnection) {
    hubConnection.on("RecieveMessageHandler", (response: MessageDto) => {
      this.messageService.addMessageAsync(response);
    })
  }

}
