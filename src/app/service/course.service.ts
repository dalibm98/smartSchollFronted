import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/courses';
  constructor(private http: HttpClient) { }

  createCourse(course: Course): Observable<Course> {

    const url = `${this.baseUrl}/upload`;
    return this.http.post<Course>(url, course);
  }
  

  getCourseById(id: number): Observable<Course> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Course>(url);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Course>(url, course);
  }

  deleteCourse(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
