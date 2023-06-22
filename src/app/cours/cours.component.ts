import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})

export class CoursComponent implements OnInit {
  courses: Course = {
    id: 0,
    title: '',
    description: '',
    pdfFile: null,
    user: null,
    pdfFilePath:"",
    downloadPDF: () => {
      // Implémentez ici la logique pour télécharger le PDF
    }
     // Modifiez la définition de la méthode downloadPDF

  };
  courseForm!: FormGroup;

  constructor(
    private courseService: CourseService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router : Router 
  ) {}

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      pdfFile: [null, Validators.required] // Ajoutez un contrôle pour le champ pdfFile
    });
  }

  createCourse() {
    const formData = new FormData();
    formData.append('title', this.courseForm.value.title);
    formData.append('description', this.courseForm.value.description);
    formData.append('pdfFile', this.courseForm.value.pdfFile);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.http
      .post('http://localhost:8080/courses/upload', formData, { headers })
      .subscribe(
        (response) => {
          this.router.navigate(['courses']);

          console.log('Course created successfully:', response);
          // Réinitialisez le formulaire ou effectuez une autre action après l'ajout réussi du cours
        },
        (error) => {
          console.error('Error creating course:', error);
          // Gérez les erreurs lors de la création du cours
        }
      );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.courseForm.patchValue({ pdfFile: file });
  }
}


