import { Component } from '@angular/core';

@Component({
  selector: 'app-request-documents',
  templateUrl: './request-documents.component.html',
  styleUrls: ['./request-documents.component.css']
})
export class RequestDocumentsComponent {
  name: string = '';
  documentType: string = '';
  reason: string = '';

  submitForm() {
    // Perform actions with the submitted form data
    // For example, you can send an HTTP request to submit the form data to a server
    console.log('Form submitted');
    console.log('Name:', this.name);
    console.log('Document Type:', this.documentType);
    console.log('Reason:', this.reason);
  }
}
