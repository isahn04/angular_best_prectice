import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserList().subscribe(
      (users: any[]) => {
        console.log("users", users);
      },
      (error) => {
      }
    );
  }
}
