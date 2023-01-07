import { Injectable } from '@angular/core';

import { MessageDto } from '../models/message/message.dto';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: MessageDto[] = [];
  
  constructor() { }
}
