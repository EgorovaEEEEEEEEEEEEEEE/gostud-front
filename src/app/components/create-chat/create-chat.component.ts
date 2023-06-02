import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { Club } from 'src/app/models/club';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.css']
})
export class CreateChatComponent {
  public createChatForm = this.formBuilder.group({
    name: ['', [Validators.required]],
  });

  chat: Chat = new Chat();

  constructor(private formBuilder: FormBuilder,
    private clubService: ClubService,
    private router: Router) { }

  onCreateClick() {
    this.clubService.createChat(this.chat).then(
      (chat: Chat) => {
        this.router.navigateByUrl(`chats/${chat.id}`);
      })
  }
}
