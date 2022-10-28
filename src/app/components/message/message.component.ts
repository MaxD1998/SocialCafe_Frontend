import { Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/core/models/MessageDto';

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
      FirstName: "Maks",
      LastName: "Michalski",
      Text: content
    };

    this.messages.push(message);
  }
}
