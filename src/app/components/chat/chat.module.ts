import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import {
    ConversationBubbleComponent
} from './conversation/conversation-bubble/conversation-bubble.component';
import {
    ConversationCreatePopupComponent
} from './conversation/conversation-create-popup/conversation-create-popup.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageBubbleComponent } from './message/message-bubble/message-bubble.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    ChatComponent,
    ConversationBubbleComponent,
    ConversationComponent,
    MessageBubbleComponent,
    MessageComponent,
    ConversationCreatePopupComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
