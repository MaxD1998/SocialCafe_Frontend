import { MessageInputDto } from 'src/app/core/dtos/message/message.input-dto';
import { AccountService } from 'src/app/core/services/account.service';
import { ChatService } from 'src/app/core/services/chat.service';
import { MessageService } from 'src/app/core/services/message.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string = "";

  private _userId;

  constructor(
    public messageService: MessageService,
    private _acconutService: AccountService,
    private _chatService: ChatService) { 
      const user = this._acconutService.getUser();
      this._userId = user.id;
    }

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
      this.message = this.message
        .trimStart()
        .trimEnd();
        
      element.textContent = null;

      if (this.message === "") 
        return false;

      const message: MessageInputDto = {
        conversationId: this.messageService.conversation.id,
        userId: this._userId,
        text: this.message,
      };

      this._chatService.addMessage(message)

      return false;
  }
}
