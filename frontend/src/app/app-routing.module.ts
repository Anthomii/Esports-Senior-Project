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

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'about', component: AboutComponent},
   { path: 'more', component: MoreComponent},
   { path: 'dota-players', component: DotaPlayersComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
   { path:'login', component: LoginComponent},
   { path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
