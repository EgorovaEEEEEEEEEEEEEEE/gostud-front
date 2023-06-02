import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/models/club';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public clubs: Club[] = [];
  public user: User = new User();

  constructor(private authService: AuthService,
    private userService: UserService,
    private clubService: ClubService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.clubs = this.clubService.getMockClubs();
  }

  onClubClick(clubhandle: string): void {

  }

}
