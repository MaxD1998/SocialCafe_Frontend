import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import {
    ConversationBubbleComponent
} from './conversation/conversation-bubble/conversation-bubble.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageBubbleComponent } from './message/message-bubble/message-bubble.component';
import { MessageComponent } from './message/message.component';
import { NewConversationPopupComponent } from './conversation/new-conversation-popup/new-conversation-popup.component';

@NgModule({
  declarations: [
    ChatComponent,
    ConversationBubbleComponent,
    ConversationComponent,
    MessageBubbleComponent,
    MessageComponent,
    NewConversationPopupComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
