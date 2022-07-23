import { Component, OnInit } from '@angular/core';
import { PostDto } from 'src/app/core/models/PostDto';

@Component({
  selector: 'app-post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.css']
})
export class PostBoardComponent implements OnInit {

  posts = [];
  initPost: PostDto = {
    FirstName: "Maks",
    LastName: "Michalski",
    Text: "Tutaj jest treść potencjalnych postów które może w swojej karierze zobaczą światło dzienne"
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
