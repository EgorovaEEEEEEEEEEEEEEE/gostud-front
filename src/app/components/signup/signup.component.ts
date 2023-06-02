import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signupForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    uniName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  })

  public signup: Signup = new Signup();
  public confirmPassword: string = '';

  constructor (private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {  }

  onSignUpClick(): void {
    this.authService.signUp(this.signup).then(
      (user: User) => {
        this.router.navigate(['user', this.userService.user.username]);
      },
      (error: any) => {
        this.router.navigate(['login']);
      }
    )
  }

  onSignInClick(): void {
    this.router.navigate(['login']);
  }
}
