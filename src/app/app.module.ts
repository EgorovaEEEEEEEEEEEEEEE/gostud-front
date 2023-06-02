import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { ClubComponent } from './components/club/club.component';
import { ChatComponent } from './components/chat/chat.component';
import { PostsComponent } from './components/posts/posts.component';
import { ChatsComponent } from './components/chats/chats.component';
import { MembersComponent } from './components/members/members.component';
import { CreateClubComponent } from './components/create-club/create-club.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    ClubComponent,
    ChatComponent,
    PostsComponent,
    ChatsComponent,
    MembersComponent,
    CreateClubComponent,
    ClubsComponent,
    CreateChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
