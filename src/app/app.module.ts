import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { FormationComponent } from './formation/formation.component';
import { BlogPostsComponent } from 'src/app/blog-post/blog-post.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUsersComponent } from 'src/app/dashbord/add-users/add-users.component';
import { AddFormationComponent } from 'src/app/dashbord/add-formation/add-formation.component';
import { AddCoursesComponent } from 'src/app/dashbord/add-courses/add-courses.component';
import { DashboardAdminComponent } from 'src/app/dashbord/dashboard-admin/dashboard-admin.component';
import { DashComponent } from './dashbord/dash/dash.component';
import { CoursComponent } from './cours/cours.component'; // Make sure the import statement is correct
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RequestDocumentsComponent } from './request-documents/request-documents.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTemplateComponentComponent } from './dialog-template-component/dialog-template-component.component';
import { AddTrainerComponent } from './dashbord/add-trainer/add-trainer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CourseComponent,
    FormationComponent,
    BlogPostsComponent,
    ProfileComponent,
    ScheduleComponent,
    AddUsersComponent,
    AddFormationComponent,
    AddCoursesComponent,
    DashboardAdminComponent,
    DashComponent,
    CoursComponent,
    RequestDocumentsComponent,
    UsersComponent,
    DialogTemplateComponentComponent,
    AddTrainerComponent, // Make sure the component is included in the declarations

 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
