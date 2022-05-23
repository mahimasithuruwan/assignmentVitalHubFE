import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';
import { catchError, map } from 'rxjs/operators';
import { IOrder } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _baseUrl = 'https://localhost:7112';
  private _apiUrl = `${this._baseUrl}/Order/`;

  constructor(private http: HttpClient) {
    this._baseUrl = 'https://localhost:7112';
    this._apiUrl = `${this._baseUrl}/Order/`;
  }

  initializeObject() {
    let obj: IOrder = {
    };

    return obj;
  }

  save(data): Observable<IOrder> {
    if (data.id === undefined) {
      return this.create(data);
    }
    return this.update(data);
  }

  get(): Observable<any> {
    return this.http.get(`${this._apiUrl}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getById(id: number): Observable<IOrder> {

    return this.http.get(`${this._apiUrl}/${id}`).pipe(
      map((response: any) => {
        //console.log(response);
        return response.data;
      })
    );
  }

  private create(data: any): Observable<IOrder> {
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

  private update(data: any): Observable<IOrder> {
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
