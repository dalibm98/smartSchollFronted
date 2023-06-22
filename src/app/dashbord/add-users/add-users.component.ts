import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Role } from 'src/app/model/role-enum';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = {
    id: 0,
    nom: '',
    email: '',
    password: '',
    role: Role.USER || Role.ADMIN || Role.Student,
  };
  dialogTitle: string = ''; // Ajouter la propriété dialogTitle

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      // Filtrer les utilisateurs ayant le rôle "Student"
      this.users = users.filter((user) => user.role === 'Student');
    });
  }

  openDialog(user: User | null = null): void {
    if (user) {
      // Si un utilisateur est passé en paramètre, il s'agit d'une modification
      // Initialise les champs avec les données de l'utilisateur sélectionné
      this.selectedUser = { ...user };
      this.dialogTitle = 'Modify User'; // Définir le titre de la boîte de dialogue
    } else {
      // Sinon, il s'agit d'une création d'utilisateur
      // Réinitialise les champs de l'utilisateur sélectionné
      this.selectedUser = {
        id: 0,
        nom: '',
        email: '',
        password: '',
        role: Role.USER || Role.ADMIN || Role.Student,
      };
      this.dialogTitle = 'Add User'; // Définir le titre de la boîte de dialogue
    }

    setTimeout(() => {
      this.dialogRef = this.dialog.open(this.dialogTemplate);
      this.dialogRef.afterClosed().subscribe((result) => {
        // Code exécuté après la fermeture de la boîte de dialogue
      });
    });
  }

  onSubmit(userForm: any): void {
    if (userForm.valid) {
      if (this.selectedUser.id) {
        this.userService
          .updateUser(this.selectedUser.id, this.selectedUser)
          .subscribe((updatedUser) => {
            // Code exécuté après la mise à jour de l'utilisateur
          });
      } else {
        this.userService.createUser(this.selectedUser).subscribe((newUser) => {
          // Code exécuté après la création de l'utilisateur
        });
      }
    }
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== user.id);
    });
  }
}
