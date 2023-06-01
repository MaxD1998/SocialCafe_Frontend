import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FriendBubbleComponent } from './friend-bubble/friend-bubble.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';

@NgModule({
  declarations: [FriendBubbleComponent, UserDetailsComponent],
  imports: [CommonModule, SharedModule, UserDetailsRoutingModule],
})
export class UserDetailsModule {}
