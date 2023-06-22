import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  formations: any[] = [
    { title: 'formation devops', description: 'DevOps is a set of practices that emphasizes collaboration and communication between software developers and IT operations professionals, automating the process of software delivery and infrastructure changes' },
    { title: 'formation power bi', description: 'Power BI is a data analysis solution from Microsoft. It enables the creation of personalized and interactive data visualizations with an interface simple enough for end users to create their own reports and dashboards' },
    { title: 'formation cloud aws', description: 'Amazon Web Services (AWS) is the world s most comprehensive and widely adopted cloud platform. It offers more than 200 comprehensive services from data centers around the world.' },
    // Add more formations as needed
  ];

  applyToFormation(formation: any) {
    // Logic for applying to the formation goes here
    console.log('Applying to formation:', formation.title);
  }
}
