import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NotificationModule } from './notification/notification.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, NotificationModule, PostModule],
})
export class MainModule {}
