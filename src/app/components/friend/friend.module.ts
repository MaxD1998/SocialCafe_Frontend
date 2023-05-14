import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRoutingModule } from './friend-routing.module';
import { FriendComponent } from './friend.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendSearchListComponent } from './friend-search-list/friend-search-list.component';
import { FriendSelectItemComponent } from './friend-search-list/friend-select-item/friend-select-item.component';
import { FriendBubbleComponent } from './friend-list/friend-bubble/friend-bubble.component';

@NgModule({
  declarations: [
    FriendComponent,
    FriendListComponent,
    FriendSearchListComponent,
    FriendSelectItemComponent,
    FriendBubbleComponent,
  ],
  imports: [CommonModule, FriendRoutingModule],
})
export class FriendModule {}
