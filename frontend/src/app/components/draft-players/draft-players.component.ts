import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { PlayerService } from "../../services/player.service";
import { DraftService } from "../../services/draft.service";

@Component({
  selector: 'app-draft-players',
  templateUrl: './draft-players.component.html',
  styleUrls: ['./draft-players.component.css']
})
export class DraftPlayersComponent implements OnInit {
  player_list;
  players : any[] = [];
  constructor(private playerService : PlayerService, private draftService : DraftService) { }

  ngOnInit() {
      this.player_list = this.playerService.getPlayers();
      this.playerService.getPlayers().subscribe(res => {
        console.log(res);
        let temp_arr : any;
        temp_arr = res;
        for(let i = 0; i < temp_arr.length; i++) {
          this.players.push(temp_arr[i]);
        }
        //console.log(this.players);
        this.draftService.setProPlayers(this.players);
      }, err => {
        console.log(err);
      });
      console.log("my player list :" + this.player_list);

        // .subscribe((players) => {
        // console.log(players);
  }

  clickOnPro(pro : string) {
    this.draftService.setSelectedPro(pro);
  }



  }
