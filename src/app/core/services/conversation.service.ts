import { map } from 'rxjs/internal/operators/map';

import { Injectable } from '@angular/core';

import { ConversationDataService } from '../data-services/conversation.data-service';
import { DtoToModelProfile } from '../map-profiles/dto-to-model.profile';
import { ConversationModel } from '../models/conversations/conversation.model';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private _conversations: ConversationModel[] = [];

  constructor(
    private _accountService: AccountService,
    private _conversatonDataService: ConversationDataService) {
  }
  
  get conversations(): ConversationModel[] {
    return this._conversations
  }

  addConversation(item: ConversationModel): void {
    this.removeIfExist(item)
    const tempArray: ConversationModel[] = [item];
    this._conversations = tempArray.concat(this._conversations)
  }

  initConversations(): void {
    let user = this._accountService.getUser();
    this._conversatonDataService.getsByUserId(user.id)
      .pipe(map(values => values.map(x => DtoToModelProfile.mapConversationDtoToConversationModel(x))))
      .subscribe(response => this._conversations = response ?? []);
  }

  removeConversation(id: number): void {
    //TODO: napisać delete na API, a tu zaimplementować logikę
  }

  private removeIfExist(item: ConversationModel): void {
    let index = this._conversations.findIndex(x => x.id == item.id);

    if (index > -1) {
      this._conversations.splice(index, 1);
    }
  }


}
