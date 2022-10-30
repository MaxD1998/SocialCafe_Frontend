import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  private api = environment.api;

  constructor(private http: HttpClient) {
  }

  get<TResult>(address: string, withCredentials: boolean = false): Observable<TResult> {
    return this.http.get<TResult>(this.api + address, { withCredentials: withCredentials });
  } 

  post<TResult, TModel>(address: string, dto: TModel): Observable<TResult> {
    return this.http.post<TResult>(this.api + address, dto);
  } 
}
