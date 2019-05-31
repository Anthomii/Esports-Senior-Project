import { Component, OnInit } from '@angular/core';
import {LeagueService} from "../../services/league.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  leagues;


  constructor(private leagueService : LeagueService) { }

  ngOnInit() {
    this.leagues = this.leagueService.getLeagues();

    // .subscribe((players) => {
    // console.log(players);
  }

}
