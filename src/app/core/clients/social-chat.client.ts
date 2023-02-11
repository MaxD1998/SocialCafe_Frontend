import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { MessageDto } from '../dtos/message/message.dto';
import { MessageInputDto } from '../dtos/message/message.input-dto';
import { AccountService } from '../services/account.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class SocialChatClient {

  private _hubConnection: HubConnection;

  constructor(
    private _accountService: AccountService, 
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
      this._messageService.addMessage(response);
    })
  }

}
