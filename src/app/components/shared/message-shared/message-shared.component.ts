import { Component, Input } from '@angular/core';
import { MessageDto } from 'src/app/core/models/MessageDto';

@Component({
  selector: 'app-message-shared',
  templateUrl: './message-shared.component.html',
  styleUrls: ['./message-shared.component.css']
})
export class MessageSharedComponent {

  @Input()
  message: MessageDto;
}
