import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { MoreComponent } from './components/more/more.component';
import { DotaPlayersComponent } from './components/dota-players/dota-players.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

//Backend
import { LeagueService } from './services/league.service';
import { HttpClientModule } from '@angular/common/http';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { LeagueModalComponent } from './components/league-modal/league-modal.component';
import { DraftingPageComponent } from './components/drafting-page/drafting-page.component';
import { DraftParticipantsComponent } from './components/draft-participants/draft-participants.component';
import { DraftDraftedComponent } from './components/draft-drafted/draft-drafted.component';
import { DraftPlayersComponent } from './components/draft-players/draft-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    MoreComponent,
    DotaPlayersComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    RectangleComponent,
    LeagueModalComponent,
    DraftingPageComponent,
    DraftParticipantsComponent,
    DraftDraftedComponent,
    DraftPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [LeagueService, ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
