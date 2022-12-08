import { PostDto } from 'src/app/core/models/post-dto';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-bubble',
  templateUrl: './post-bubble.component.html',
  styleUrls: ['./post-bubble.component.css']
})
export class PostBubbleComponent {

  @Input()
  post: PostDto;

}
