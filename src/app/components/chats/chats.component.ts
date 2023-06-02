import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  public chats: Chat[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.chats = this.clubService.getMockClub().chats;
  }

}
