import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { ConversationRoute } from '../constants/routes/api-routes/conversation.route';
import { ConversationDto } from '../dtos/conversation/conversation.dto';
import { ConversationInputDto } from '../dtos/conversation/conversation.input-dto';

@Injectable({
  providedIn: 'root',
})
export class ConversationDataService extends BaseDataService {
  create(dto: ConversationInputDto): Observable<ConversationDto> {
    console.log(dto);
    return this.httpPost<ConversationDto, ConversationInputDto>(ConversationRoute.create, dto);
  }

  getById(id: string): Observable<ConversationDto> {
    return this.httpGet<ConversationDto>(ConversationRoute.getId + id);
  }

  getsByUserId(id: string): Observable<ConversationDto[]> {
    return this.httpGet<ConversationDto[]>(ConversationRoute.getUserId + id);
  }
}
