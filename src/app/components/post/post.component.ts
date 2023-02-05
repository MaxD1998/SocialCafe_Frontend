import { PostDto } from 'src/app/core/dtos/post/post.dto';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts = [];
  initPost: PostDto = {
    id: 0,
    text: "Tutaj jest treść potencjalnych postów które może w swojej karierze zobaczą światło dzienne",
    userId: 0,
    user: {
      id: 0,
      firstName: "Maks",
      lastName: "Michalski",
    }
  };

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 10; index++) {
      this.posts.push(this.initPost);
    }
  }

  textareaAutoHeightResize(textarea: HTMLTextAreaElement) {
    textarea.style.height = 2 + textarea.scrollHeight + "px";
  }
}
