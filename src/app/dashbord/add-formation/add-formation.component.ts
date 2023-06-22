import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})

export class AddFormationComponent {
 
  constructor() { }

  onAddFormation() {
    // Logic to navigate to the page for adding a new formation
    console.log('Add Formation clicked');
  }

  onModifyFormation(formationId: string) {
    // Logic to modify the selected formation based on formationId
    console.log('Modify Formation clicked. Formation ID:', formationId);
  }

  onDeleteFormation(formationId: string) {
    // Logic to delete the selected formation based on formationId
    console.log('Delete Formation clicked. Formation ID:', formationId);
  }
}


