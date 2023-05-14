import { MessageDataService } from 'src/app/core/data-services/message.data-service';
import { ConversationModel } from 'src/app/core/models/conversations/conversation.model';
import { ConversationService } from 'src/app/core/services/conversation.service';
import { MessageService } from 'src/app/core/services/message.service';

import { Component, OnInit } from '@angular/core';

import { ConversationBubbleComponent } from './conversation-bubble/conversation-bubble.component';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  isVisiblePopup: boolean = false;

  constructor(
    public conversationService: ConversationService,
    private _messageDataService: MessageDataService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.conversationService.initConversations();
  }

  openClosePopup(): void {
    this.isVisiblePopup = !this.isVisiblePopup;
  }

  selectItemHandler(item: ConversationModel): void {
    const conversation = this.conversationService.conversations.find(x => x.isActive);
    if (conversation) {
      conversation.isActive = false;
    }

    item.isActive = true;
    this._messageDataService.getsByConversationId(item.id).subscribe(response => {
      this._messageService.conversation = item;
      this._messageService.messages = response?.reverse() ?? [];
    });
  }
}
