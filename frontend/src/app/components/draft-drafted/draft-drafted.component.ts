import { Component, OnInit } from '@angular/core';
import {DraftService} from "../../services/draft.service";
import {Draft} from "../../models/draft.model";

@Component({
  selector: 'app-draft-drafted',
  templateUrl: './draft-drafted.component.html',
  styleUrls: ['./draft-drafted.component.css']
})
export class DraftDraftedComponent implements OnInit {

  selected_league_id : string;
  selected_user : string;

  drafted_players : string[] = [];

  constructor(private draftService:DraftService) { }

  ngOnInit() {
    this.draftService.getSelectedLeague().subscribe(res => {
      this.selected_league_id = res;
      this.draftService.getSelectedUser().subscribe(res => {
        this.selected_user = res;
        this.displayDraftedPlayers();
      });
    });

    //this.getDraftedPlayers();

  }

  getDraftedPlayers() {
    this.draftService.getDraft(this.selected_league_id, this.selected_user).subscribe(res => {
      this.drafted_players = [];
      let arr = JSON.parse(JSON.stringify(res));
      for(var i = 0; i < arr.length; i++) {
        let temp : Draft = arr[i];
        this.drafted_players.push(temp.proName);
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
