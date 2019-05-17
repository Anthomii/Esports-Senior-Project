import { Component, OnInit } from '@angular/core';
import { PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-draft-participants',
  templateUrl: './draft-participants.component.html',
  styleUrls: ['./draft-participants.component.css']
})
export class DraftParticipantsComponent implements OnInit {

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    // this.playerService.getPlayers().subscribe((players) => {
    //   console.log(players);
    // });
  }

}
