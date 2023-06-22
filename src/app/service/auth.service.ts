import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../model/register-request';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthenticationRequest } from '../model/authentication-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/Auth';

  constructor(private http: HttpClient) { }

  registerUser(request: RegisterRequest): Observable<User> {
    const url = `${this.baseUrl}/register`;
    return this.http.post<User>(url, request);
  }

  loginUser(request: AuthenticationRequest): Observable<User> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<User>(url, request);
  }
}
