import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Role } from '../model/role-enum';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    this.http.get<Course[]>('http://localhost:8080/courses').subscribe(
      (response) => {
        this.courses = response;
        console.log('Courses:', this.courses);
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
  downloadPDF(course: Course) {
    const fileName = course.pdfFilePath.split('/').pop();
    console.log('File Name:', fileName); // Obtenir le nom du fichier à partir du chemin du fichier PDF
    this.http.get('http://localhost:8080/courses/pdfs/' + fileName, { responseType: 'blob' }).subscribe(
      (response) => {
        saveAs(response, fileName); // Télécharger le fichier PDF en utilisant la bibliothèque file-saver
      },
      (error) => {
        console.error('Error downloading PDF:', error);
      }
    );


}

isTeacherOrAdmin(): boolean {
  const currentUserStr = localStorage.getItem('currentUser');
  if (currentUserStr !== null) {
    const currentUser = JSON.parse(currentUserStr);
    return currentUser.role === Role.ADMIN || currentUser.role === Role.USER;
  }
  return false;
}

}