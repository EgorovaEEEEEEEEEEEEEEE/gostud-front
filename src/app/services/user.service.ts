import { EventEmitter, Injectable } from "@angular/core"
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { Signup } from "../models/signup";
import { Login } from "../models/login";
import { Club } from "../models/club";
import { AuthService } from "./auth.service";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class UserService {
  private _userUrl: string = 'http://localhost:3000/api/user';
  private _user: User = new User();

  constructor(private http: HttpClient,
    private authService: AuthService) {
    this.authService.onUserLoggedIn.subscribe((user: User) => {
      this._user = user;
    });
  }

  getUser(username: string) {
    // Строим ссылку на апи сервера
    let url = `${this._userUrl}/${username}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<User>((resolve, reject) => {
      this.http.get<any>(url).subscribe({
        next: (res: any) => {
          this._user = User.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  updateUser() {
    // Проверяем залогинился ли пользователь
    if (this._user === undefined || localStorage.getItem('token') === null) {
      throw new Error('User not logged in');
    }

    // Строим ссылку на апи сервера
    let username = localStorage.getItem('username');
    let url = `${this._userUrl}/${username}`;
    // Строим тело запроса
    let body = {
      username: this._user.username,
      firstName: this._user.firstName,
      lastName: this._user.lastName,
      uniName: this._user.uniName
    }

    // Возвращаем промис, в котором пускаем PUT запрос по указанному эндпоинту
    return new Promise<User>((resolve, reject) => {
      this.http.put<any>(url, body).subscribe({
        next: (res: any) => {
          this._user = User.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  deleteUser() {
    // Проверяем залогинился ли пользователь
    if (this._user === undefined) {
      throw new Error('User not logged in');
    }

    // Строим ссылку на апи сервера
    let username = localStorage.getItem('username');
    let url = `${this._userUrl}/${username}`;

    // Возвращаем промис, в котором пускаем DELETE запрос по указанному эндпоинту
    return new Promise<User>((resolve, reject) => {
      this.http.delete<any>(url).subscribe({
        next: (res: any) => {
          this.authService.logOut();
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  

  get userUrl(): string {
    return `${this._userUrl}/${this._user.username}`;
  }

  get user(): User {
    return this._user;
  }
}