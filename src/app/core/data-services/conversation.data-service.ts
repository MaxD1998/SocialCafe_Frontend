import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ConversationRoute } from '../constants/api-routes/conversation.route';
import { ConversationDto } from '../models/conversation/conversation.dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class ConversationDataService extends BaseDataService {
  getConversationById(id: number): Observable<ConversationDto> {
    return this.get<ConversationDto>(ConversationRoute.getId + id);
  }
  getConversationsByUserId(id: number): Observable<ConversationDto[]> {
    return this.get<ConversationDto[]>(ConversationRoute.getUserId + id);
  }
}
