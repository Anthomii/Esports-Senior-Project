import { Component, OnInit } from '@angular/core';
import { LeagueService } from "../../services/league.service";
import { ActivatedRoute } from '@angular/router'
import { League } from "../../models/league.model";
import { DraftService } from "../../services/draft.service";
import {Draft} from "../../models/draft.model";

@Component({
  selector: 'app-drafting-page',
  templateUrl: './drafting-page.component.html',
  styleUrls: ['./drafting-page.component.css']
})
export class DraftingPageComponent implements OnInit {

  selected_league : League;
  league_name : string;
  league_user_list : string[];

  selected_league_id : string;
  selected_user : string;
  selected_pro : string;

  constructor(private leagueService : LeagueService, private activatedRoute:ActivatedRoute, private draftService:DraftService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      if(params) {
        this.selected_league_id = params.get("leagueId");
        this.draftService.setSelectedLeague(this.selected_league_id);
      }
    });
    console.log("id: " + this.selected_league_id);
    //console.log("end of drafting init");
    this.leagueService.getLeague(this.selected_league_id).subscribe(res => {
      //console.log(res);
      this.selected_league = JSON.parse(JSON.stringify(res));
      //console.log(this.selected_league);
      this.league_name = this.selected_league.leagueName;
      this.league_user_list = this.selected_league.usersIdList;
      this.draftService.setParticipantList(this.league_user_list);
      this.draftService.getSelectedUser().subscribe(res => {
        this.selected_user = res;
        //console.log(this.selected_user);
      });
      this.draftService.getSelectedPro().subscribe(res => {
        this.selected_pro = res;
      });
      //console.log(this.league_name);
      //console.log(this.league_user_list);
    });

  }

  func() {
    console.log(this.selected_league_id);
  }

  onClickDraft() {
    //console.log("start drafting process");
    this.draftService.newDraft.leagueId = this.selected_league_id;
    this.draftService.newDraft.leagueName = this.league_name;
    this.draftService.newDraft.participantName = this.selected_user;
    this.draftService.newDraft.proName = this.selected_pro;
    this.draftService.getDraftByLeague(this.selected_league_id).subscribe(res => {
      //let temp_arr = [];
      let check_exist : Boolean = true;
      let arr = JSON.parse(JSON.stringify(res));
      for(let i = 0; i < arr.length; i++) {
        let temp : Draft = arr[i];
        //temp_arr.push(temp.proName);
        if(this.selected_pro === temp.proName) {check_exist = false;}
      }
      if(check_exist) {
        this.draftService.addDraft().subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
      }
      else {
        console.log("pro is already selected");
      }
    }, err => {
      console.log(err);
    });
    console.log("init draft obj fields");
  }

  onClickPlay() {
    console.log("why hello there");
  }
}
