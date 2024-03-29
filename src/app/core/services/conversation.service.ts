import { map } from 'rxjs/internal/operators/map';

import { Injectable } from '@angular/core';

import { ConversationDataService } from '../data-services/conversation.data-service';
import { ConversationDtoProfile } from '../map-profiles/conversation-dto.profile';
import { ConversationModel } from '../models/conversations/conversation.model';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  private _conversations: ConversationModel[] = [];

  constructor(private _accountService: AccountService, private _conversatonDataService: ConversationDataService) {}

  get conversations(): ConversationModel[] {
    return this._conversations;
  }

  addConversation(item: ConversationModel): void {
    this.removeIfExist(item);
    this._conversations = [item].concat(this._conversations);
  }

  initConversations(): void {
    let user = this._accountService.getUser();
    this._conversatonDataService
      .getsByUserId(user.id)
      .pipe(map(values => values.map(x => ConversationDtoProfile.mapToConversationModel(x))))
      .subscribe(response => (this._conversations = response ?? []));
  }

  removeConversation(id: number): void {
    //TODO: napisać delete na API, a tu zaimplementować logikę
  }

  private removeIfExist(item: ConversationModel): void {
    this._conversations = this._conversations.filter(x => x.id != item.id);
  }
}
