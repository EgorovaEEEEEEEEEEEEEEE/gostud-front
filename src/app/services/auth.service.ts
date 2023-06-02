import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Signup } from '../models/signup';
import { HttpClient } from '@angular/common/http';
import { Club } from '../models/club';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/login';
  private signupUrl = 'http://localhost:3000/api/signup';
  private userUrl = 'http://localhost:3000/api/user';
  private clubUrl = 'http://localhost:3000/api/club';
  private chatUrl = 'http://localhost:3000/api/chat';

  private _user: User = new User();

  public onUserLoggedIn: EventEmitter<User> = new EventEmitter<User>();

  constructor(private http: HttpClient) { }

  private processAuthResponse(response: any): void {
    // Проверяем наличие полей у объекта ответа
    if (response.userData === undefined || response.token === undefined) {
      throw new Error('неправильный формат ответа от сервера');
    }

    // Создаем пользователя из ответа
    this._user = User.fromObject(response.userData);

    // Сохраняем имя пользователя
    if (this._user.username === undefined) {
      throw new Error('у пользователя нету имени, произошла ошибка');
    }
    localStorage.setItem('username', this._user.username);
    // Сохраняем токен
    localStorage.setItem('token', response.token);

    // Информируем, что пользователь успешно залогинился
    this.onUserLoggedIn.emit(this._user);
  }

  logIn(login: Login) {
    let body = login;

    return new Promise<User>((resolve, reject) => {
      this.http.post<any>(this.loginUrl, body).subscribe({
        next: (response: any) => {
          this.processAuthResponse(response);
          resolve(this._user);
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  signUp(signup: Signup) {
    let body = signup;

    return new Promise<User>((resolve, reject) => {
      this.http.post<any>(this.signupUrl, body).subscribe({
        next: (response: any) => {
          this.processAuthResponse(response);
          resolve(this._user);
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  logOut(): void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }

  createClub(club: Club) {
    let body = club;

    return new Promise<Club>((resolve, reject) => {
      this.http.post<any>(this.signupUrl, body).subscribe({
        next: (response: any) => {
          let resClub = Club.fromObject(response);
          this.user.adminClubs.push(resClub);
          resolve(resClub);
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  sub(clubhandle: string) {
    let body = `${this.userUrl}/${this._user.username}/${clubhandle}`;

    return new Promise<Club>((resolve, reject) => {
      this.http.post<any>(this.signupUrl, body).subscribe({
        next: (response: any) => {
          let resClub = Club.fromObject(response);
          this._user.userClubs.push(resClub);
          resolve(resClub);
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  unsub(clubhandle: string) {
    let body = `${this.userUrl}/${this._user.username}/club/${clubhandle}`;

    return new Promise<void>((resolve, reject) => {
      this.http.delete<any>(this.signupUrl).subscribe({
        next: () => {
          let index = this._user.userClubs.findIndex(c => c.handle == clubhandle);
          this._user.userClubs.splice(index, 1);
          resolve();
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  joinChat(chaitd: number) {
    let url = `${this.userUrl}/${this._user.username}/chat/${chaitd}`;

    return new Promise<Chat>((resolve, reject) => {
      this.http.post<any>(url, {}).subscribe({
        next: (res: any) => {
          let index = this._user.userClubs.findIndex(c => c.id == chaitd);
          let resChat = Chat.fromObject(res);
          this._user.chats.push(resChat);
          resolve(resChat);
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  leaveChat(chaitd: number) {
    let url = `${this.userUrl}/${this._user.username}/chat/${chaitd}`;

    return new Promise<void>((resolve, reject) => {
      this.http.delete<any>(url).subscribe({
        next: () => {
          let index = this._user.userClubs.findIndex(c => c.id == chaitd);
          this._user.chats.splice(index, 1);
          resolve();
        },
        error: (error: any) => {
          reject(error);
        }
      }
      );
    });
  }

  get user(): User {
    return this._user;
  }

  get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
