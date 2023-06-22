import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { FormationComponent } from './formation/formation.component';
import { BlogPostsComponent } from 'src/app/blog-post/blog-post.component'; // Update the import statement
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CoursComponent } from './cours/cours.component';
import { RequestDocumentsComponent } from './request-documents/request-documents.component';

// Import the dashboard components
import { AddCoursesComponent } from 'src/app/dashbord/add-courses/add-courses.component';
import { AddScheduleComponent } from 'src/app/dashbord/add-schedule/add-schedule.component';
import { AddUsersComponent } from 'src/app/dashbord/add-users/add-users.component';
import { DashboardAdminComponent } from 'src/app/dashbord/dashboard-admin/dashboard-admin.component';
import { AddFormationComponent } from './dashbord/add-formation/add-formation.component';
import { UsersComponent } from './users/users.component';
import { AddTrainerComponent } from './dashbord/add-trainer/add-trainer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'blog', component: BlogPostsComponent }, // Update the path and component
  { path: 'profile', component: ProfileComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'request-documents', component: RequestDocumentsComponent },
  { path: 'dashboard/Users', component: UsersComponent },
  { path: 'add-courses', component: AddCoursesComponent },
  { path: 'dashboard/add-schedule', component: AddScheduleComponent },
  { path: 'dashboard/add-users', component: AddUsersComponent },
  { path: 'dashboard/add-formation', component: AddFormationComponent },
  { path: 'dashboard/dashboard-admin', component: DashboardAdminComponent },
  { path: 'dashboard/AddTrainer', component: AddTrainerComponent },
 
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
