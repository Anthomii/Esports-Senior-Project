import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';



import { AppRoutingModule } from './app-routing.module';

//Components
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
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { LeagueModalComponent } from './components/league-modal/league-modal.component';
import { DraftingPageComponent } from './components/drafting-page/drafting-page.component';
import { DraftParticipantsComponent } from './components/draft-participants/draft-participants.component';
import { DraftDraftedComponent } from './components/draft-drafted/draft-drafted.component';
import { DraftPlayersComponent } from './components/draft-players/draft-players.component';
import { CreateLeaguePageComponent } from './components/create-league-page/create-league-page.component';

//Backend
import { LeagueService } from './services/league.service';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { PlayerService } from './services/player.service';
import { DraftService } from "./services/draft.service";
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import {Player} from "@angular/core/src/render3/interfaces/player";


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
    DraftPlayersComponent,
    CreateLeaguePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [LeagueService, ValidateService, AuthService, AuthGuard, PlayerService, DraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
