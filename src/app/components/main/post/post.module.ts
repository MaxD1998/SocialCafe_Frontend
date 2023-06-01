import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class PostModule {}
