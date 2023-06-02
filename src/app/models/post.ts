import { User } from "./user";

export class Post {
	constructor(readonly content: string = '',
		readonly createdAt: Date = new Date()) {}
}