import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  apiUrl = 'http://localhost:4001';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public postLogin(user: any): Observable<User> {
    return this.httpClient.post<any>(
      this.apiUrl + '/login',
      user,
      this.httpOptions
    );
  }
}
