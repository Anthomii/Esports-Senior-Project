import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Draft } from "../models/draft.model";

@Injectable({
  providedIn: 'root'
})
export class DraftService {
  uri = 'http://localhost:3000';

  private participant_list = new BehaviorSubject<string[]>([]);
  private selected_user = new BehaviorSubject<string>("default selected user");
  private selected_pro = new BehaviorSubject<string>("default selected pro player");

  newDraft : Draft = {
    leagueId : "",
    leagueName : "",
    participantName : "",
    proName : ""
  };

  constructor(private http: HttpClient) { }

  getParticipantList() {
    return this.participant_list.asObservable();
  }

  setParticipantList(part_list : string[]) {
    this.participant_list.next(part_list);
  }

  getSelectedUser() {
    return this.selected_user.asObservable();
  }

  setSelectedUser(user : string){
    this.selected_user.next(user);
  }

  getSelectedPro() {
    return this.selected_pro.asObservable();
  }

  setSelectedPro(pro : string) {
    this.selected_pro.next(pro);
  }

  addDraft() {
    //console.log("start addDraft");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/drafts/add`, this.newDraft, {headers:headers});
  }

}
