import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-dota-players',
  templateUrl: './dota-players.component.html',
  styleUrls: ['./dota-players.component.css']
})
export class DotaPlayersComponent implements OnInit {
   players;
  constructor(private issueService: IssueService) { }

  ngOnInit() {
     this.players = this.issueService.getPlayers();
  }

}
