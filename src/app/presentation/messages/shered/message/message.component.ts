import { Component, Input, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/core/models/MessageDto';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input()
  message: MessageDto;
  
}
