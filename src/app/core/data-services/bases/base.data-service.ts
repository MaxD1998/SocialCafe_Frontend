import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDataService {
  private _api = environment.api;

  constructor(private http: HttpClient) {
  }

  protected get<TResult>(address: string, withCredentials: boolean = false): Observable<TResult> {
    return this.http.get<TResult>(this._api + address, { withCredentials: withCredentials });
  } 

  protected post<TResult, TModel>(address: string, dto: TModel, withCredentials: boolean = false): Observable<TResult> {
    return this.http.post<TResult>(this._api + address, dto, { withCredentials: withCredentials });
  } 
}
