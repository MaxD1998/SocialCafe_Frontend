import { BaseFormComponent } from 'src/app/core/bases/base-form-component';
import { PostDataService } from 'src/app/core/data-services/post.data-service';
import { AuthorizeDto } from 'src/app/core/dtos/authorize.dto';
import { PostDto } from 'src/app/core/dtos/post/post.dto';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent extends BaseFormComponent implements OnInit {
  private readonly _user: AuthorizeDto;
  posts: PostDto[] = [];

  constructor(
    private _accountService: AccountService,
    private _postDataService: PostDataService,
    formBuilder: FormBuilder) {
    super(formBuilder);
      this._user = this._accountService.getUser();
  }

  ngOnInit(): void {
    this.initPosts();
  }

  onSubmit() {
    console.log(this.form.controls.textArea.value);
    this._postDataService.create({
      userId: this._user.id,
      text: this.form.controls.textArea.value
    })
    .subscribe(response => this.posts = [response].concat(this.posts));
    this.form.controls.textArea.reset();
  }

  textareaAutoHeightResize(textarea: HTMLTextAreaElement) {
    textarea.style.height = 2 + textarea.scrollHeight + "px";
  }

  private initPosts(): void {
    this._postDataService.getsByUserAndUserFriendsByUserId(this._user.id)
      .subscribe(response => this.posts = response.reverse());
  }

  protected setFormControls(): {} {
    return {
      textArea: [null, Validators.required]
    }
  }
}
