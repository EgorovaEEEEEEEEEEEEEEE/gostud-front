import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Club } from 'src/app/models/club';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent {
  public createClubForm = this.formBuilder.group({
    handle: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  club: Club = new Club();

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  onCreateClick() {
    this.authService.createClub(this.club).then(
      (club: Club) => {
        this.router.navigateByUrl(`clubs/${club.handle}`);
      })
  }

}
