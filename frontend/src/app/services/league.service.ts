import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Headers} from "@angular/http";
import {map} from "rxjs/operators";

import {League} from '../models/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  uri = 'http://localhost:3000';

  selectedLeague : League = {
    leagueID: 0,
    leagueName: '',
    usersIdList: []
  };

  incrementLeagueId() {
    this.selectedLeague.leagueID += 1;
  }
  resetLeague() {
    this.selectedLeague.leagueName = '';
    this.selectedLeague.usersIdList = [];
  }
  setLeagueName(name : string) {
    this.selectedLeague.leagueName = name;
  }
  setUserListId(names : string[]) {
    this.selectedLeague.usersIdList = names;
  }
  constructor(private http: HttpClient) { }

  getLeagues() : Observable<Object> {
    const data = Observable.create(observer => {
      fetch(`${this.uri}/leagues`)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
    data.subscribe(data => {return data;});
    return data;
  }

  postLeague() {
    //console.log('local league name: ' + this.selectedLeague.leagueName);
    //console.log('local league users: ' + this.selectedLeague.usersIdList);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    //let json_obj = JSON.stringify({leagueID:99, leagueName: "name_test", usersIdList: ["rawr"]});
    //let json_obj = JSON.stringify(this.selectedLeague);
    return this.http.post(`${this.uri}/leagues/add`, this.selectedLeague, {headers : headers});

  }
}
