import { MessageDto } from 'src/app/core/models/message-dto';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  
  messages: MessageDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(element: HTMLDivElement){
    
    let content = element.textContent;
    element.textContent = "";

    if (content == "") return;

    let message: MessageDto = {
      firstName: "Maks",
      lastName: "Michalski",
      text: content
    };

    this.messages.push(message);
  }
}
