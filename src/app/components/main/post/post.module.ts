import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PostBubbleComponent } from './post-bubble/post-bubble.component';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent, PostBubbleComponent],
  exports: [PostComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PostModule {}
