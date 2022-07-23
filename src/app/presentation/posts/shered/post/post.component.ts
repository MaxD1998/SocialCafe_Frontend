import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/app/core/models/PostDto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostDto;

  constructor() { }

  ngOnInit(): void {
  }

}
