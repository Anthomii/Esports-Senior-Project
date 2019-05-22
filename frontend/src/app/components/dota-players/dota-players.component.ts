import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-dota-players',
  templateUrl: './dota-players.component.html',
  styleUrls: ['./dota-players.component.css']
})
export class DotaPlayersComponent implements OnInit {
   players;
   leagues;
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {

     this.leagues = this.leagueService.getLeagues();
     console.log(this.players);

  }

}
