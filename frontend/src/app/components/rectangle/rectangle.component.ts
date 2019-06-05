import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {LeagueService} from "../../services/league.service";
import {League} from "../../models/league.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  name : string;
  username : string;
  me_user_profile : User;
  my_leagues : string[];
  league_names : string[];

  selected_league_id : string;


  constructor(private authService:AuthService, private leagueService:LeagueService) { }

  ngOnInit() {
    //this.leagueService.currentMessage.subscribe(message => {this.selected_league_id = message});
    //console.log("selected id: " + this.selected_league_id);


    this.username = JSON.parse(localStorage.getItem('user')).username;
    console.log(this.username);
    this.authService.getUser(this.username).subscribe(user => {
      this.me_user_profile = JSON.parse(JSON.stringify(user));
      this.my_leagues = this.me_user_profile.leagues;

      this.getAllLeagueNames();

    }, err => {
      throw(err)
    });
  }

  getAllLeagueNames() {
    this.my_leagues.forEach(league => {
      this.leagueService.getLeague(league).subscribe(res => {
        let league_obj : League = JSON.parse(JSON.stringify(res));
        //console.log(league_obj.leagueName);
        if(this.league_names === undefined ) {
          this.league_names = [];
        }
        this.league_names.push(league_obj.leagueName);

      }, err => {
        throw(err);
      });
    });
  }

  printID(index) {
    // console.log(this.my_leagues[index]);
    // console.log(this.league_names[index]);
    console.log("PRINT" + index);
  }

  setupAndMoveToDraft(name : string, id : string) {
    console.log(id);
    this.leagueService.sendMessage("RAWR");
    window.location.href = "drafting-page/" + id;
    //console.log("selected id: " + this.selected_league_id);
  }

}
