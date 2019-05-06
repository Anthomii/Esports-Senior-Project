import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-draft-players',
  templateUrl: './draft-players.component.html',
  styleUrls: ['./draft-players.component.css']
})
export class DraftPlayersComponent implements OnInit {
   players;
  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
   this.players = this.leagueService.getPlayers();
  }

}
