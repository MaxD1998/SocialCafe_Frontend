import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { PostRoute } from '../constants/routes/api-routes/post.route';
import { PostDto } from '../dtos/post/post.dto';
import { PostInputDto } from '../dtos/post/post.input-dto';

@Injectable({
  providedIn: 'root',
})
export class PostDataService extends BaseDataService {
  create(dto: PostInputDto): Observable<PostDto> {
    return this.httpPost<PostDto, PostInputDto>(PostRoute.create, dto);
  }

  getsByUserId(id: string): Observable<PostDto[]> {
    return this.httpGet<PostDto[]>(PostRoute.getsUserId + id);
  }

  getsByUserAndUserFriendsByUserId(id: string): Observable<PostDto[]> {
    return this.httpGet<PostDto[]>(PostRoute.getsUserAndUserFriendsByUserId + id);
  }
}
