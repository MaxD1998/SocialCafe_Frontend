import { MessageDto } from 'src/app/core/dtos/message/message.dto';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
})
export class MessageBubbleComponent {
  @Input() message: MessageDto;
}
