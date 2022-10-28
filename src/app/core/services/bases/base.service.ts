import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private api = environment.api;

  constructor(private http: HttpClient) {
  }

  post<T, TModel>(address: string, dto: TModel): Observable<T> {
    return this.http.post<T>(this.api + address, dto);
  } 
}
