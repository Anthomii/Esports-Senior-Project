import { Component, OnInit } from '@angular/core';
import {DraftService} from "../../services/draft.service";
import {Draft} from "../../models/draft.model";
import { PlayerService } from "../../services/player.service";
import {Player} from "../../models/player.model";


@Component({
  selector: 'app-draft-drafted',
  templateUrl: './draft-drafted.component.html',
  styleUrls: ['./draft-drafted.component.css']
})
export class DraftDraftedComponent implements OnInit {

  selected_league_id : string;
  selected_user : string;

  drafted_players : string[] = [];

  user_list : string[] = [];
  points_list : Number[] = [];

  constructor(private draftService:DraftService, private playerService : PlayerService) { }

  ngOnInit() {

    this.draftService.getSelectedLeague().subscribe(res => {
      this.selected_league_id = res;
      this.draftService.getSelectedUser().subscribe(res => {
        this.selected_user = res;

        this.user_list = [];
        this.points_list = [];

        this.displayDraftedPlayers();
      });
    });

    //this.getDraftedPlayers();

  }

  getDraftedPlayers() {
    //s
    //

    this.draftService.getDraft(this.selected_league_id, this.selected_user).subscribe(res => {
      this.drafted_players = [];
      let arr = JSON.parse(JSON.stringify(res));
      for(var i = 0; i < arr.length; i++) {
        let temp : Draft = arr[i];
        this.drafted_players.push(temp.proName);
        this.playerService.getPlayer(temp.proName).subscribe(res => {
          let player : Player = JSON.parse(JSON.stringify(res));
          //console.log("got dem playerrrs");
          ///console.log(player.points);
          if (this.user_list.find(function(name) {return name == temp.participantName;}) === undefined) {
            this.user_list.push(temp.participantName);
            this.points_list.push(0);
          }

          let index = this.user_list.findIndex(function(name) {return name == temp.participantName;});
          let n = +this.points_list[index];
          let j = +player.points;
          this.points_list.splice(index, 0, n + j);
          //console.log(this.user_list);
          //console.log(this.points_list);
          this.draftService.setPointsUser(this.user_list[0]);
          this.draftService.setPointsPoints(this.points_list[0]);
        }, err => {
          console.log(err);
        });

      }
      //JSON.parse(JSON.stringify(res));
    }, err => {
      console.log(err);
    });
  }

  checkForLeague() {
    return !(this.selected_league_id === 'default selected league')
  }

  checkForUser() {
    return !(this.selected_user === 'default selected user')
  }

  displayDraftedPlayers() {
    if(this.checkForLeague() && this.checkForUser()) {
      this.getDraftedPlayers();
    }
  }

  onClickDraft(draft_name : string) {
    console.log("deleting: " + draft_name);
    this.draftService.deleteDraftByLeagueAndPro(this.selected_league_id, draft_name).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });

  }

}
