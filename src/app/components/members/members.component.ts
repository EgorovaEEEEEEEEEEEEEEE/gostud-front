import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public members: User[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.members = this.clubService.getMockClub().members;
  }
}
