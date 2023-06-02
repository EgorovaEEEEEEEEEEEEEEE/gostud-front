import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { User } from 'src/app/models/user';
import { ClubService } from 'src/app/services/club.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {
  user: User = new User();

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }
}
