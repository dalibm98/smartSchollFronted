import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  classNames: string[] = ['Class A', 'Class B', 'Class C'];
  
  schedule: any[] = [
    { time: '9:00 AM', className: 'Class A' },
    { time: '10:00 AM', className: 'Class B' },
    { time: '11:00 AM', className: 'Class C' }
    // Add more entries as needed
  ];
}
