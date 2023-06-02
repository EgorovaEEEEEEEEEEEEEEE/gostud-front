import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoStud';

  constructor(private authService: AuthService) { }

  onLogoutClick(): void {
    this.authService.logOut();
  }

  get loggedIn(): boolean {
    return this.authService.loggedIn;
  }
}
