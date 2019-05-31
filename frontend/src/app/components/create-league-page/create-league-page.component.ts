import { Component, OnInit } from '@angular/core';
import { LeagueService } from "../../services/league.service";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
import { JwtHelperService } from '@auth0/angular-jwt';
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


    //getting token username, defines "ME"
    console.log(JSON.parse(localStorage.getItem('user')).username);
    //console.log(typeof this.users);
    //console.log(Object.values(this.users));
  }

  onSubmit(form: NgForm) {
    this.leagueService.setLeagueName(form.value.valueOf().leagueName);
    this.leagueService.setUserListId(this.current_users);

    let league_id;
    this.leagueService.postLeague().subscribe(res => {
        // @ts-ignore
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
    //console.log("in passLeagueIdtoUsers" + leagueId);
    //console.log(this.current_users);
    this.current_users.forEach(username => {
      // console.log(username);
      // console.log(leagueId);
      console.log("username: " + username);
      let temp_user = this.authService.getUser(username);
      temp_user.subscribe(res => {
        //console.log("RAWR");
        //console.log(res);
        // @ts-ignore
        if(res.leagues === undefined || res.leagues === null) {
          // @ts-ignore
          res.leagues = [];
        }
        //console.log(res.leagues);
        // @ts-ignore
        res.leagues.push(leagueId);
        //console.log(res.leagues);
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
        // @ts-ignore
        if(res.valueOf().success == false) {
          console.log('not in db');
        }
        else {
          // @ts-ignore
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
