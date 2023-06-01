import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ComponentRoute } from 'src/app/core/constants/routes/component.route';
import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { PostDataService } from 'src/app/core/data-services/post.data-service';
import { UserDataService } from 'src/app/core/data-services/user.data-service';
import { FriendDto } from 'src/app/core/dtos/friend/friend.dto';
import { PostDto } from 'src/app/core/dtos/post/post.dto';
import { UserDto } from 'src/app/core/dtos/user/user.dto';
import { GuidHelper } from 'src/app/core/helpers/guid.helper';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less'],
})
export class UserDetailsComponent implements OnInit {
  friends: FriendDto[] = [];
  isLoaded: boolean = false;
  posts: PostDto[] = [];
  user: UserDto = null;
  userName: string = null;

  constructor(
    private _friendDataService: FriendDataService,
    private _userDataService: UserDataService,
    private _postDataService: PostDataService,
    private _activatedRouteSnapshot: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id: string = this._activatedRouteSnapshot.snapshot.params['id'];
    if (!GuidHelper.isGuid(id)) {
      this._router.navigateByUrl(ComponentRoute.main);
    }

    this._userDataService.getById(id).subscribe(response => {
      this.user = response;
      this.userName = `${this.user.firstName} ${this.user.lastName}`;
      this.initDetails(this.user);
    });
  }

  private initDetails(user: UserDto) {
    if (!user) {
      return;
    }

    forkJoin({
      friends: this._friendDataService.getsByUserId(user.id),
      posts: this._postDataService.getsByUserId(user.id),
    }).subscribe(response => {
      this.friends = response.friends;
      this.posts = response.posts;
      this.isLoaded = true;
    });
  }
}
