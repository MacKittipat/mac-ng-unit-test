import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title: string;
  userName: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.title = 'User Profile';
    this.userService.getUser().subscribe(user => {
      this.userName = user.name;
    });
  }

}
