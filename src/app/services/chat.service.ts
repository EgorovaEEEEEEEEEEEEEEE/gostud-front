import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { User } from '../models/user';
import { Message } from '../models/message';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ClubService } from './club.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _chat: Chat = new Chat();
  private _chatUrl = `http://localhost:300/api/chat`;

  constructor(private userService: UserService,
    private clubService: ClubService,
    private http: HttpClient) { }

  getChat(chatid: number) {
    let url = `${this._chatUrl}/${chatid}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Chat>((resolve, reject) => {
      this.http.get<any>(url).subscribe({
        next: (res: any) => {
          this._chat = Chat.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  updateChat() {
    let url = `${this._chatUrl}/${this._chat.id}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Chat>((resolve, reject) => {
      this.http.put<any>(url, this._chat).subscribe({
        next: (res: any) => {
          this._chat = Chat.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  deleteChat(chatid: number) {
    let url = `${this._chatUrl}/${chatid}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<void>((resolve, reject) => {
      this.http.delete<any>(url).subscribe({
        next: () => {
          this._chat = new Chat();
          resolve();
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  sendMessage(content: string, sentAt: Date) {
    let url = `${this._chatUrl}/${this._chat.id}/messages`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Message>((resolve, reject) => {
      this.http.post<any>(url, { content, sentAt }).subscribe({
        next: (res: any) => {
          this._chat.messages.push(Message.fromObject(res));
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  updateMessage(messageId: number, content: string) {
    let url = `${this._chatUrl}/${this._chat.id}/messages/${messageId}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Message>((resolve, reject) => {
      this.http.put<any>(url, { content }).subscribe({
        next: (res: any) => {
          let index = this._chat.messages.findIndex(m => m.id == this._chat.id);
          this._chat.messages[index] = Message.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  deleteMessage(messageId: number) {
    let url = `${this._chatUrl}/${this._chat.id}/messages/${messageId}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Chat>((resolve, reject) => {
      this.http.delete<any>(url).subscribe({
        next: (res: any) => {
          let index = this._chat.messages.findIndex(m => m.id == this._chat.id);
          this._chat.messages.splice(index, 1);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  get chat(): Chat {
    return this._chat;
  }
}
