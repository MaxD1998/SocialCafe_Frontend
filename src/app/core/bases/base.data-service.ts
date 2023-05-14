import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseDataService {
  private _api = environment.api;

  constructor(private _http: HttpClient) {}

  protected httpGet<TResult>(
    address: string,
    header: { withCredentials?: boolean; params?: HttpParams } = {}
  ): Observable<TResult> {
    return this._http.get<TResult>(this._api + address, {
      withCredentials: header.withCredentials,
      params: header.params,
    });
  }

  protected httpDelete(address: string, withCredentials: boolean = false): Observable<boolean> {
    return this._http.delete<boolean>(this._api + address, { withCredentials: withCredentials });
  }

  protected httpPost<TResult, TModel>(
    address: string,
    dto: TModel,
    withCredentials: boolean = false
  ): Observable<TResult> {
    return this._http.post<TResult>(this._api + address, dto, { withCredentials: withCredentials });
  }

  protected httpPut<TResult, TModel>(
    address: string,
    dto: TModel,
    withCredentials: boolean = false
  ): Observable<TResult> {
    return this._http.put<TResult>(this._api + address, dto, { withCredentials: withCredentials });
  }
}
