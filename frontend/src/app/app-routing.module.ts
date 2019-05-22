import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MoreComponent } from './components/more/more.component';
import { DotaPlayersComponent } from './components/dota-players/dota-players.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { DraftingPageComponent } from './components/drafting-page/drafting-page.component';
import { CreateLeaguePageComponent } from "./components/create-league-page/create-league-page.component";

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'about', component: AboutComponent},
   { path: 'more', component: MoreComponent},
   { path: 'dota-players', component: DotaPlayersComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
   { path: 'drafting-page', component: DraftingPageComponent},
   { path: 'login', component: LoginComponent},
   { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
   { path: 'create-league', component: CreateLeaguePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
