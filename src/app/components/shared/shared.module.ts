import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostBubbleComponent } from './post-bubble/post-bubble.component';

@NgModule({
  declarations: [PostBubbleComponent],
  imports: [CommonModule],
  exports: [PostBubbleComponent],
})
export class SharedModule {}
