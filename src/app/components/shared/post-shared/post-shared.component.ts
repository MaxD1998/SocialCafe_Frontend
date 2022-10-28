import { Component, Input } from '@angular/core';
import { PostDto } from 'src/app/core/models/PostDto';

@Component({
  selector: 'app-post-shared',
  templateUrl: './post-shared.component.html',
  styleUrls: ['./post-shared.component.css']
})
export class PostSharedComponent {

  @Input()
  post: PostDto;

}
