import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { map, catchError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  isLoader: boolean;
  userList: any;

  constructor(private userService: UserService) {
    this.isLoader = true;
  }

  ngOnInit() {
    this.getUserData();
  }

  // getUserData() {
  //   this.userService.getUserList().subscribe((users: any) => {
  //     this.isLoader = false;
  //     this.userList = users.map((user: any) => {
  //       user.id = user.id.toString().padStart(2, '0');
  //       return user;
  //     });
  //   });
  // }

  // getUserData() {
  //   this.userService
  //     .getUserList()
  //     .pipe(
  //       map((users: any) => {
  //         return users.map((user: any) => {
  //           user.id = user.id.toString().padStart(2, '0');
  //           return user;
  //         });
  //       }),
  //       catchError((error: any): any => {
  //         console.error('Error fetching user data:', error);
  //       })
  //     )
  //     .subscribe(
  //       (users: any[]) => {
  //         this.isLoader = false;
  //         this.userList = users;
  //       },
  //       (error) => {
  //         this.isLoader = false;
  //       }
  //     );
  // }

  getUserData() {
    this.userService.getUserList().subscribe(
      (users: any[]) => {
        this.isLoader = false;
        this.userList = users;
      },
      (error) => {
        this.isLoader = false;
      }
    );
  }
}
