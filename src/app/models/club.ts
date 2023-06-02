import { Chat } from "./chat";
import { Message } from "./message";
import { Post } from "./post";
import { User } from "./user";

export class Club {
	constructor(readonly id: number = 0,
		public handle: string = '',
		public name: string = '',
		public description: string = '',
		public chats: Chat[] = [],
		public posts: Post[] = [],
		public members: User[] = []) { }

	static fromObject(obj: any): Club {
		return new Club(obj.id, obj.name, obj.description, obj);
	}
}