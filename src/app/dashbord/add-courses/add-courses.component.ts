import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { saveAs } from 'file-saver';
import { CourseService } from 'src/app/service/course.service';
@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private http: HttpClient , private courseService :CourseService ) {}

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
deleteCourse(courseId: number) {
  this.courseService.deleteCourse(courseId).subscribe(
    () => {
      console.log('Course deleted');
      // Réinitialiser les valeurs ou actualiser la liste des cours
      this.getAllCourses(); // Actualiser la liste des cours
    },
    (error) => {
      console.error('Error deleting course:', error);
    }
  );
}
}
