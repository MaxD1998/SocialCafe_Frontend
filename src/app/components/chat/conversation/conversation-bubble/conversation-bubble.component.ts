import { ConversationModel } from 'src/app/core/models/conversations/conversation.model';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-bubble',
  templateUrl: './conversation-bubble.component.html',
  styleUrls: ['./conversation-bubble.component.css']
})
export class ConversationBubbleComponent implements OnInit{

  @Input() conversation: ConversationModel;

  message: string;
  name: string = "";

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {
    this.message = this.conversation.message?.text
    this.initName();
  }

  private initName() {
    if (this.conversation.name != null && this.conversation.name != "") {
      this.name = this.conversation.name;
      return;
    }

    if (this.conversation.conversationMembers.length > 0) {
      let user = this.accountService.getUser();
      let conversationMembers = this.conversation.conversationMembers.length > 1
        ? this.conversation.conversationMembers.filter(x => x.userId != user.id)
        : this.conversation.conversationMembers;

      this.name = conversationMembers
        .map(x => `${x.user.firstName} ${x.user.lastName}`)
        .join(", ");
    }
  }
}
