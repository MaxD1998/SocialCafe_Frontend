import { Component, OnInit } from '@angular/core';
import { MessageDto } from 'src/app/core/models/MessageDto';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

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
