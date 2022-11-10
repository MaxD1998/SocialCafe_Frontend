import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageSharedComponent } from './message-shared/message-shared.component';
import { PostSharedComponent } from './post-shared/post-shared.component';

@NgModule({
  declarations: [
    MessageSharedComponent,
    PostSharedComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MessageSharedComponent,
    PostSharedComponent,
  ]
})
export class SharedModule { }
