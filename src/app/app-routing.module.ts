import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { ClubComponent } from './components/club/club.component';
import { userResolver } from './resolvers/user-resolver';
import { canActivateUser } from './guards/user-guard';
import { clubResolver } from './resolvers/club.resolver';
import { ChatComponent } from './components/chat/chat.component';
import { PostsComponent } from './components/posts/posts.component';
import { ChatsComponent } from './components/chats/chats.component';
import { MembersComponent } from './components/members/members.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { CreateClubComponent } from './components/create-club/create-club.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';

/*
resolve: { user: userResolver }
resolve: { club: clubResolver }
*/

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user/:username', component: UserComponent },
  { path: 'clubs', component: ClubsComponent },
  { path: 'create-club', component: CreateClubComponent },
  { path: 'create-chat', component: CreateChatComponent },
  { path: 'chats', component: ChatsComponent },
  {
    path: 'club/:clubhandle', component: ClubComponent, children: [
      { path: 'posts', component: PostsComponent },
      { path: 'chats', component: ChatsComponent },
      { path: 'members', component: MembersComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
    ]
  },
  { path: 'chat/:chatid', component: ChatComponent },

  //   canActivate: [canActivateUser],
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
