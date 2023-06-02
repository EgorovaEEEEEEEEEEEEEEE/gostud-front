import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent {
  // public links: string[] = ['posts', 'users', 'memebers'];
  public activeLink: string = 'posts';
  public club: Club = new Club();

  constructor (private userService: UserService,
    private clubService: ClubService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.club = this.clubService.getMockClub();
  }
}
