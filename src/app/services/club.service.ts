import { Injectable } from '@angular/core';
import { Club } from '../models/club';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private _clubsUrl = 'http://localhost:3000/api/clubs';

  private _club: Club = new Club();

  constructor(private userService: UserService,
    private http: HttpClient) { }

  getUserClubs() {
    let url = `${this.userService.userUrl}/clubs`;
  }

  getAllClubs() {
    // Строим ссылку на апи сервера
    let url = `${this._clubsUrl}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Club>((resolve, reject) => {
      this.http.get<any>(url).subscribe({
        next: (res: any) => {
          // this._club = Club.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  getClub(clubhandle: string) {
    // Строим ссылку на апи сервера
    let url = `${this._clubsUrl}/${clubhandle}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Club>((resolve, reject) => {
      this.http.get<any>(url).subscribe({
        next: (res: any) => {
          // this._club = Club.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  updateClub() {
    // Строим ссылку на апи сервера
    let url = `${this._clubsUrl}/${this._club.handle}`;
    let body = this.club;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Club>((resolve, reject) => {
      this.http.put<any>(url, body).subscribe({
        next: (res: any) => {
          this._club = Club.fromObject(res);
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  deleteClub() {
    // Строим ссылку на апи сервера
    let url = `${this._clubsUrl}/${this._club.handle}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<void>((resolve, reject) => {
      this.http.delete<any>(url).subscribe({
        next: () => {
          this._club = new Club();
          resolve();
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }

  createChat(chat: Chat) {
    // Строим ссылку на апи сервера
    let url = `${this._clubsUrl}/${this.club.handle}`;

    // Возвращаем промис, в котором пускаем GET запрос по указанному эндпоинту
    return new Promise<Chat>((resolve, reject) => {
      this.http.get<any>(url).subscribe({
        next: (res: any) => {
          this._club.chats.push(Chat.fromObject(res));
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      })
    });
  }
  
  get club(): Club {
    return this._club;
  }
  
    getMockClub(): Club {
      let members = [
        new User(0, 'jake', 'Jake', 'Smith', 'UHC'),
        new User(0, 'anna', 'Anna', 'Smith', 'UHC'),
        new User(0, 'gerald', 'Gerald', 'Smith', 'UHC'),
        new User(0, 'harold', 'Harold', 'Smith', 'UHC'),
        new User(0, 'john', 'John', 'Smith', 'UHC'),
        new User(0, 'emily', 'Emily', 'Smith', 'UHC'),
        new User(0, 'helen', 'Helen', 'Smith', 'UHC'),
        new User(0, 'nik', 'Nik', 'Smith', 'UHC'),
        new User(0, 'mike', 'Mike', 'Smith', 'UHC'),
        new User(0, 'walter', 'Walter', 'Smith', 'UHC'),
        new User(0, 'jessy', 'Jessy', 'Smith', 'UHC'),
      ]
    
      let messages1 = [
        new Message(0, 'hey watup', new Date(2023, 4, 3, 12, 32), members[0]),
        new Message(0, 'hi', new Date(2023, 4, 3, 12, 35), members[1]),
        new Message(0, 'any plans', new Date(2023, 4, 3, 13, 11), members[3]),
        new Message(0, 'are you kidding', new Date(2023, 4, 3, 13, 22), members[4]),
      ]
  
      let messages2 = [
        new Message(0, 'quite quiet here', new Date(2023, 4, 3, 12, 32), members[3]),
        new Message(0, 'kill yourself', new Date(2023, 4, 3, 12, 45), members[1]),
      ]
  
      let messages3 = [
        new Message(0, 'mama mia', new Date(2023, 4, 3, 12, 54), members[1]),
        new Message(0, 'pizza', new Date(2023, 4, 3, 12, 56), members[2]),
        new Message(0, 'lasagna', new Date(2023, 4, 3, 13, 3), members[3]),
        new Message(0, 'mama mia', new Date(2023, 4, 3, 13, 5), members[1]),
        new Message(0, 'mario?', new Date(2023, 4, 3, 14, 12), members[2]),
      ]
  
      let messages4 = [
        new Message(0, '?', new Date(2023, 4, 3, 13, 33), members[1]),
        new Message(0, '?', new Date(2023, 4, 3, 13, 33), members[1]),
        new Message(0, '?', new Date(2023, 4, 3, 13, 32), members[1]),
        new Message(0, 'stop fucking spamming', new Date(2023, 4, 3, 14, 11), members[2]),
        new Message(0, 'idiot', new Date(2023, 4, 3, 14, 22), members[2]),
        new Message(0, '?', new Date(2023, 4, 3, 14, 33), members[1]),
        new Message(0, '?', new Date(2023, 4, 3, 14, 44), members[1]),
      ]
  
      let chats = [
        new Chat(0, 'main', messages1),
        new Chat(0, 'foodies', messages2),
        new Chat(0, 'memes', messages3),
        new Chat(0, 'serius', messages4),
      ]  
  
      let posts = [
        new Post('ok im done', new Date(2023, 4, 3, 12, 32)),
        new Post('AAAAAAAAAAAAAAAAAAAAAAAA', new Date(2023, 4, 12, 23, 11)),
        new Post('wow these doritos are good!', new Date(2023, 4, 3, 11, 22)),
        new Post('i am going to fart', new Date(2023, 4, 3, 12, 4)),
        new Post('cucumbers', new Date(2023, 5, 3, 22, 5)),
        new Post('lemme see how this works', new Date(2023, 5, 3, 5, 32)),
        new Post('listen to tmbte its good', new Date(2023, 5, 3, 15, 3)),
        new Post('MELON IS A STUPID DORK!!!', new Date(2023, 6, 3, 17, 13)),
      ].sort((a, b) =>  b.createdAt!.getTime() - a.createdAt!.getTime());  
  
      return new Club(0,
        'letibooks',
        'Любители книг',
        'Собираемся каждую пятницу обсуждать любимые книжки!',
        [
          new Chat(0, 'main', [
            new Message(0, 'wow such empty', new Date(2023, 5, 3, 16, 12), new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined)),
            new Message(0, 'где все?', new Date(2023, 5, 3, 17, 15), new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined)),
          ], new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined)),
          new Chat(0, 'foodies', [
            new Message(0, 'hey watup', new Date(2023, 5, 3, 15, 3), new User(0, 'heh', 'Heh', 'Heheh', 'HEH', undefined, undefined)),
            new Message(0, 'hello', new Date(2023, 5, 3, 15, 12), new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined)),
            new Message(0, 'как дела?', new Date(2023, 5, 3, 15, 15), new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined)),
          ], new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined))
        ],
        undefined,
        [new User(0, 'fef', 'Fef', 'Fefef', 'FEF', undefined, undefined)]);
    }
  
    getMockClubs(): Club[] {
      return [
        new Club(0, 'supercool', 'TARATARA', 'Care to show me something?'),
        new Club(0, 'ideal', 'Ideal', 'Place for perfect things'),
        new Club(0, 'clubber', 'dance', 'badum badum'),
        new Club(0, 'idkman', 'confusion', 'literally a mock club'),
        new Club(0, 'listenhere', 'memes', 'harry where is the money man'),
      ];
    }
}
