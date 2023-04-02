import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { NotificationRoute } from '../constants/routes/api-routes/notification.route';
import { NotificationDto } from '../dtos/notification/notification.dto';
import { NotificationInputDto } from '../dtos/notification/notification.input-dto';

@Injectable({
  providedIn: 'root'
})
export class NotificationDataService extends BaseDataService {
  delete(id: string): Observable<boolean> {
    return this.delete(NotificationRoute.delete + id);
  }

  getsByRecipientId(id: string): Observable<NotificationDto[]> {
    return this.get<NotificationDto[]>(NotificationRoute.getsRecipientId + id);
  }

  update(id: string, dto: NotificationInputDto): Observable<NotificationDto> {
    return this.put<NotificationDto, NotificationInputDto>(NotificationRoute.update + id, dto);
  }
}
