import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chat: Chat = new Chat();

  public curUser: User;

  constructor(private authService: AuthService,
    private chatService: ChatService) {
      this.curUser = this.authService.user;
    }

  ngOnInit(): void {
    this.chat = this.chatService.chat;
  }
}
