import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { UserDetailed } from '../models/user-detailed';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl + 'users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(id): Observable<UserDetailed> {
    return this.http.get<UserDetailed>(this.baseUrl + id);
  }

  getClients(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "role/client");
  }
}
