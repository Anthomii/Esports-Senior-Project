import { Component, OnInit } from '@angular/core';
import { LeagueService } from "../../services/league.service";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-create-league-page',
  templateUrl: './create-league-page.component.html',
  styleUrls: ['./create-league-page.component.css'],
  providers: [LeagueService, AuthService]
})
export class CreateLeaguePageComponent implements OnInit {

  showSuccessMessage : boolean;
  league_counter : number;

  users; // list of all users
  current_users = []; // used for "invited" list

  constructor(private leagueService: LeagueService, private authService : AuthService) {
    this.league_counter = 0;
  }

  ngOnInit() {
    this.users = this.authService.getAllUsers();
    //console.log('HI');
    //console.log(typeof this.users);
    //console.log(Object.values(this.users));
  }

  onSubmit(form: NgForm) {
    this.leagueService.setLeagueName(form.value.valueOf().leagueName);
    this.leagueService.setUserListId(this.current_users);

    let league_id;
    this.leagueService.postLeague().subscribe(res => {
        league_id = res._id;
        this.passLeagueIdToUsers(league_id);
    }, error1 => {
      throw(error1);
    });
    // postLeague returns new league object... use id to inject to all users in a league



    this.resetForm(form);

    console.log('end of submit');

  }

  resetForm(form : NgForm) {
    this.leagueService.incrementLeagueId();
    this.leagueService.resetLeague();
    form.resetForm();
  }

  passLeagueIdToUsers(leagueId : String) {
    this.current_users.forEach(username => {
      // console.log(username);
      // console.log(leagueId);
      let temp_user = this.authService.getUser(username);
      temp_user.subscribe(res => {
        //console.log("RAWR");
        //console.log(res);
        if(res.leagues === undefined || res.leagues === null) {
          res.leagues = [];
        }
        res.leagues.push(leagueId);
        this.authService.updateUser(res).subscribe(res_2 => {
          //console.log("update user?");
          //console.log(res_2);
        }, error2 => {
          throw(error2);
        });
      }, error1 => {
        throw(error1);
      });
    });
  }

  addUser(newUser: string) {
    if (newUser) {
      //console.log(newUser);
      //console.log(this.users);
      this.authService.getUser(newUser).subscribe(res => {
        if(res.valueOf().success == false) {
          console.log('not in db');
        }
        else {
          var temp_user = res.valueOf().username;
          if(this.current_users.find((name) => {return name == temp_user;}) == undefined) {
            this.current_users.push(temp_user);
            console.log('pushed user');
          }
          else {
            console.log('user already invited');
          }
        }
      }, err => {
        throw (err);
      });
    }
  }
}
