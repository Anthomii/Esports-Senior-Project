import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-draft-players',
  templateUrl: './draft-players.component.html',
  styleUrls: ['./draft-players.component.css']
})
export class DraftPlayersComponent implements OnInit {
  players;

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
      this.players = this.playerService.getPlayers();
      console.log(this.players);
        // .subscribe((players) => {
        // console.log(players);
      }


  }
