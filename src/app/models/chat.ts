import { Club } from "./club";
import { Message } from "./message";
import { User } from "./user";

export class Chat {
	constructor(readonly id: number = 0,
		public name: string = '',
		public messages: Message[] = [],
		public admin: User = new User(),
		public club: Club = new Club()) { }

	get lastMessage(): Message {

		const maxLastMessageLength = 50;
		let msg = this.messages[this.messages.length - 1];

		let cutContent = msg.content.length <= maxLastMessageLength ? msg.content : `${msg.content.slice(0, maxLastMessageLength)}...`;

		return new Message(msg.id, cutContent, msg.sentAt, msg.sender);
	}

	static fromObject(obj: any): Chat {
		return new Chat(obj.id, obj.name, obj.email);
	}
}