import { PostDto } from 'src/app/core/dtos/post/post.dto';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-bubble',
  templateUrl: './post-bubble.component.html',
  styleUrls: ['./post-bubble.component.less'],
})
export class PostBubbleComponent {
  @Input() post: PostDto;
}
