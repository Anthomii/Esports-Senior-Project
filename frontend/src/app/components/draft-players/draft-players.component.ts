import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { PlayerService} from "../../services/player.service";
import { DraftService } from "../../services/draft.service";

@Component({
  selector: 'app-draft-players',
  templateUrl: './draft-players.component.html',
  styleUrls: ['./draft-players.component.css']
})
export class DraftPlayersComponent implements OnInit {
  player_list;

  constructor(private playerService : PlayerService, private draftService : DraftService) { }

  ngOnInit() {
      this.player_list = this.playerService.getPlayers();
      console.log(this.player_list);
        // .subscribe((players) => {
        // console.log(players);
  }

  clickOnPro(pro : string) {
    this.draftService.setSelectedPro(pro);
  }



  }
