import { MessageDto } from 'src/app/core/models/message-dto';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string = "";
  messages: MessageDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onKeyDownHandler(event: KeyboardEvent, element: HTMLDivElement) {
    if (event.key === "Enter" && !event.shiftKey) {
      this.sendMessage(element);
      return false;
    }

    if (event.key === "Backspace" && element.textContent === "") {
      this.clearContent(element);
      return false;
    }

    return true;
  }

  onKeyUpHandler(event: KeyboardEvent, element: HTMLDivElement) {
    if (event.key === "Backspace" && element.textContent === "") {
      this.clearContent(element);
      return false;
    }

    return true;
  }

  private clearContent(element: HTMLDivElement) {
    element.textContent = null;
  }

  private sendMessage(element: HTMLDivElement){
      this.message = element.outerText;
      console.log(this.message);
      this.message = this.message
        .trimStart()
        .trimEnd();
      console.log(this.message);
        
      element.textContent = null;

      if (this.message === "") 
        return false;

      let message: MessageDto = {
        id: 0,
        conversationId: 0,
        firstName: "Maks",
        lastName: "Michalski",
        text: this.message
      };

      this.messages.push(message);
      return false;
  }
}
