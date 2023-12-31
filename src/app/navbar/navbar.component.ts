import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.checkUserLoggedIn();
  }

  checkUserLoggedIn(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null;
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/profile']);
  }
}
