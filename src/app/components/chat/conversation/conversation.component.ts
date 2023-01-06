import { ConversationService } from 'src/app/core/services/conversation.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  constructor(public conversationService: ConversationService) { }

  ngOnInit(): void {
    this.conversationService.getConversations();
  }

}
