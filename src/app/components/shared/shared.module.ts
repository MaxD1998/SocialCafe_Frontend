import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostSharedComponent } from './post-shared/post-shared.component';
import { MessageSharedComponent } from './message-shared/message-shared.component';



@NgModule({
  declarations: [
    MessageSharedComponent,
    PostSharedComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageSharedComponent,
    PostSharedComponent,
  ]
})
export class SharedModule { }
