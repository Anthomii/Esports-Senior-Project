import { Component, OnInit } from '@angular/core';
import { PlayerService } from "../../services/player.service";
import { AuthService } from "../../services/auth.service";
import { DraftService } from "../../services/draft.service";

@Component({
  selector: 'app-draft-participants',
  templateUrl: './draft-participants.component.html',
  styleUrls: ['./draft-participants.component.css']
})
export class DraftParticipantsComponent implements OnInit {

  user_list;

  constructor(private authService : AuthService, private draftService : DraftService) { }

  ngOnInit() {
    // this.draftService.getParticipantList().subscribe(list => {
    //   this.user_list = list;
    //   console.log(this.user_list);
    // });
    this.user_list = this.draftService.getParticipantList();
  }

  clickOnUser(user : string) {
    console.log(user);
    this.draftService.setSelectedUser(user);
  }
}
