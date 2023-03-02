import { ConversationNameHelper } from 'src/app/core/helpers/conversation-name.helper';
import { ConversationModel } from 'src/app/core/models/conversations/conversation.model';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, DoCheck, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-bubble',
  templateUrl: './conversation-bubble.component.html',
  styleUrls: ['./conversation-bubble.component.css']
})
export class ConversationBubbleComponent implements OnInit, DoCheck{
  @HostBinding("style.--bg-color") _bgColor: string = null
  @HostBinding("style.--bg-hover-color") _bgHoverColor: string = "var(--bs-gray-700)"

  @Input() conversation: ConversationModel;

  message: string;
  name: string = "";

  constructor(private accountService: AccountService) {
  }

  ngDoCheck(): void {
    this.init();
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    if (!this.conversation){
      return;
    }

    const user = this.accountService.getUser();
    this.message = this.conversation.message?.text;
    this.name = ConversationNameHelper.setName(this.conversation, user.id);
    this.setBgColor()
  }

  setBgColor() {
    if (this.conversation.isActive) {
      this._bgColor = "var(--bs-gray-800)";
      this._bgHoverColor = "var(--bs-gray-800)";
    } else {
      this._bgColor = null;
      this._bgHoverColor = "var(--bs-gray-700)";
    }
  }
}
