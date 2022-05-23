import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { catchError, map } from 'rxjs/operators';
import { IItem } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private _baseUrl = 'https://localhost:7112';
  private _apiUrl = `${this._baseUrl}/Item/`;

  constructor(private http: HttpClient) {
    this._baseUrl = 'https://localhost:7112';
    this._apiUrl = `${this._baseUrl}/Item/`;
  }

  initializeObject() {
    let obj: IItem = {
    };

    return obj;
  }


  getById(id: number): Observable<IItem> {

    return this.http.get(`${this._apiUrl}/${id}`).pipe(
      map((response: any) => {
        //console.log(response);
        return response.data;
      })
    );
  }

  private create(data: any): Observable<IItem> {
    console.log(data);
    return this.http.post(this._apiUrl, data).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
    return null;
  }

  private update(data: any): Observable<IItem> {
    console.log(data);
    return this.http.put(this._apiUrl, data).pipe(
      map((response: any) => {
        return response.data;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
