import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";
import { User } from "../models/user";

export const userResolver: ResolveFn<User> =
	(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		// Проверяем имя
		let username = route.paramMap.get('username');
		if (username === null) {
			throw new Error('имя пользователя null');
		}

		return inject(UserService).getUser(username).then((user: User) => {
			return user;
		});
	};