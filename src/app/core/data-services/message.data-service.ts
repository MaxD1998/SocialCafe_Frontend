import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { MessageRoute } from '../constants/routes/api-routes/message.route';
import { MessageDto } from '../dtos/message/message.dto';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService extends BaseDataService {
  getsByConversationId(id: string): Observable<MessageDto[]> {
    return this.get<MessageDto[]>(MessageRoute.getConversationId + id)
  }
}
