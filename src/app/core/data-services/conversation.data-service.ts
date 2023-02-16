import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ConversationRoute } from '../constants/routes/api-routes/conversation.route';
import { ConversationDto } from '../dtos/conversation/conversation.dto';
import { ConversationInputExtendDto } from '../dtos/conversation/conversation.input-extend-dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class ConversationDataService extends BaseDataService {
  createExtend(dto: ConversationInputExtendDto): Observable<ConversationDto> {
    return this.post<ConversationDto, ConversationInputExtendDto>(ConversationRoute.createExtend, dto)
  }

  getById(id: number): Observable<ConversationDto> {
    return this.get<ConversationDto>(ConversationRoute.getId + id);
  }
  
  getsByUserId(id: number): Observable<ConversationDto[]> {
    return this.get<ConversationDto[]>(ConversationRoute.getUserId + id);
  }
}
