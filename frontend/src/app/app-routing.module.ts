import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { DotaPlayersComponent } from './dota-players/dota-players.component';

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'about', component: AboutComponent},
   { path: 'more', component: MoreComponent},
   { path: 'dota-players', component: DotaPlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
