import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.posts = this.clubService.getMockClub().posts;
  }

}
