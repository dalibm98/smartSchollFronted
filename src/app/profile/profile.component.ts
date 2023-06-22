import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from '../model/register-request';
import { AuthenticationRequest } from '../model/authentication-request';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user';
import { Role, } from '../model/role-enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  authRequest: AuthenticationRequest = {
    email: '',
    password: ''
  };

  registerRequest: RegisterRequest = {
    nom: '',
    email: '',
    password: ''
  };
  registrationSuccess: boolean = false;

  constructor(private authService: AuthService ,private router :Router) { }

  registerUser(): void {
    this.authService.registerUser(this.registerRequest)
      .subscribe((user: User) => {
      
        this.registrationSuccess = true;
      }, (error) => {
       
      });
  }


    loginUser(): void {
      this.authService.loginUser(this.authRequest)
        .subscribe((user: User) => {
          if (user.role === Role.ADMIN) {
            // Utilisateur avec le rôle d'administrateur
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['/dashboard/dashboard-admin']);
          } else if (user.role === Role.USER) {
            // Utilisateur avec le rôle de formateur
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['']);
          } else if (user.role === Role.Student) {
            // Utilisateur avec le rôle d'étudiant
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigate(['']);
          } else {
            // Rôle non reconnu, gérer l'erreur
          }
        }, (error) => {
          // Traitez l'erreur en cas d'échec de la connexion
        });
    }

    logoutUser(): void {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
}
