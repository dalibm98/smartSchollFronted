import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    const url = `${this.baseUrl}`;
    return this.http.post<User>(url, user);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  updateUser(userId: number, user: User): Observable<User> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.delete<void>(url);
  }
}
