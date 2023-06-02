import { User } from "./user";

export class Message {
	constructor(readonly id: number = 0,
		public content: string = '',
		public sentAt: Date = new Date(),
		readonly sender: User = new User()) { }

	static fromObject(obj: any): Message {
		return new Message(obj.id, obj.content, obj.sentAt);
	}
}