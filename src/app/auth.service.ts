import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3333";

  constructor(private http:HttpClient) { }

  login(user: User):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, user, {responseType: 'json'});
  }

  registration(user: User):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, user, {responseType: 'json'});
  }

}
