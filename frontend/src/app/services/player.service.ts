import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Player } from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //use controller's methods here

  uri = 'http://localhost:3000';

  newPlayer: Player = {
    accountID: "", //steamid
    name: "",
    avatar: "",
    points: 0
  };

  constructor(private http: HttpClient) {
  }

  setNewPlayer(acc, name, av, p) {
    this.newPlayer.accountID = acc;
    this.newPlayer.name = name;
    this.newPlayer.avatar = av;
    this.newPlayer.points = p;
  }

  resetNewPlayer() {
    this.newPlayer.accountID = "";
    this.newPlayer.name = "";
    this.newPlayer.avatar = "";
    this.newPlayer.points = 0;
  }

  getPlayers(): Observable<Object> {
    const data = Observable.create(observer => {
      fetch(`${this.uri}/players`)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
    data.subscribe(data => {
      return data;
    });
    return data;
  }

  getPlayer(player : string) {
    return this.http.get(`${this.uri}/players/${player}`);
  }

  addPlayer(player) {
    return this.http.post(`${this.uri}/players/add`, player);
  }

  updatePlayer() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/players/update`, this.newPlayer, {headers: headers});
  }
}
