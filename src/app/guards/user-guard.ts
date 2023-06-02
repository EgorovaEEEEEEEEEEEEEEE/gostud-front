import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const canActivateUser: CanActivateFn =
	(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		let authService = inject(AuthService);

		if (!authService.loggedIn) {
			inject(Router).navigate(['login'])
		}

		return authService.loggedIn;
	};