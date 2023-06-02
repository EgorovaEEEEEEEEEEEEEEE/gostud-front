import { Chat } from "./chat";
import { Club } from "./club";

export class User {
    constructor(public id: number = 0,
        public username: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public uniName: string = '',
        public userClubs: Club[] = [], 
        public adminClubs: Club[] = [],
        public chats: Chat[] = []) { }

    static fromObject(obj: any): User {
        // Клубы, на которые пользователь подписан
        let userClubs: Club[] = [];
        // obj.userClubs.forEach((club: Club) => { userClubs.push(Club.fromObject(club)) });
        // Клубы, которые администрируются пользователем
        let adminClubs: Club[] = [];
        // obj.adminClubs.forEach((club: Club) => { adminClubs.push(Club.fromObject(club)) });
        // Пользователь
        let user = new User(obj.id, obj.username, obj.firstName, obj.lastName, obj.uniName, userClubs, adminClubs);
        return user;
    }
}
