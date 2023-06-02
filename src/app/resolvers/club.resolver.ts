import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";
import { User } from "../models/user";
import { ClubService } from "../services/club.service";
import { Club } from "../models/club";

export const clubResolver: ResolveFn<Club> =
	(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		// Проверяем имя
		let clubhandle = route.paramMap.get('clubhandle');
		if (clubhandle === null) {
			throw new Error('имя клуба null');
		}

		return inject(ClubService).getClub(clubhandle).then((club: Club) => {
			return club;
		});
	};