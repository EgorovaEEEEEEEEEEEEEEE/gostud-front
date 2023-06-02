import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  public login: Login = new Login();

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onLogInClick(): void {
    this.authService.logIn(this.login).then(
      (user: User) => {
        this.router.navigate(['user', this.userService.user.username]);
      },
      (error: any) => {
        this.router.navigate(['login']);
      }
    )
  }

  onSignUpClick(): void {
    this.router.navigate(['signup']);
  }
}
