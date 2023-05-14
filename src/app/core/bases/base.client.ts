import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { MessageInputDto } from '../dtos/message/message.input-dto';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseClient {
  protected _hubConnection: HubConnection;

  constructor(private _accountService: AccountService) {}

  protected abstract get url(): string;

  connect(): void {
    let user = this._accountService.getUser();

    if (user == null) {
      return;
    }

    this._hubConnection = new HubConnectionBuilder()
      .withAutomaticReconnect()
      .withUrl(this.url, {
        accessTokenFactory: () => user.token,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    this._hubConnection.start();
    this.registerMethods();
  }

  createMessage(dto: MessageInputDto): void {
    this._hubConnection.invoke('CreateMessageAsync', dto);
  }

  disconnect(): void {
    this._hubConnection.stop();
  }

  protected abstract registerMethods(): void;
}
