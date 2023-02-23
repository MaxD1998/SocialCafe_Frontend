import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ConversationRoute } from '../constants/routes/api-routes/conversation.route';
import { ConversationDto } from '../dtos/conversation/conversation.dto';
import { ConversationInputDto } from '../dtos/conversation/conversation.input-dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class ConversationDataService extends BaseDataService {
  create(dto: ConversationInputDto): Observable<ConversationDto> {
    return this.post<ConversationDto, ConversationInputDto>(ConversationRoute.create, dto)
  }

  getById(id: number): Observable<ConversationDto> {
    return this.get<ConversationDto>(ConversationRoute.getId + id);
  }
  
  getsByUserId(id: number): Observable<ConversationDto[]> {
    return this.get<ConversationDto[]>(ConversationRoute.getUserId + id);
  }
}
