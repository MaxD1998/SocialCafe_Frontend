import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PostModule
  ]
})
export class MainModule { }
