import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //use controller's methods here

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient)  {}

  getPlayers() : Observable<Object> {
    const data = Observable.create(observer => {
      fetch(`${this.uri}/players`)
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
  //
  // getPlayerByID(id) {
  //   return this.http.get('${this.uri}/players/${id}');
  // }
  //
  addPlayer(player) {
    return this.http.post(`${this.uri}/players/add`, player);
  }
  //
  // updatePlayer(id, name, avatar, drafted){
  //   const player = {
  //     name: name,
  //     avatar: avatar,
  //     drafted: drafted
  //
  //   };
  //
  //   return this.http.post('${this.uri}/players/update/${id}', player);
  // }
  //
  // deletePlayer(id) {
  //   return this.http.delete('${this.uri}/players/delete/${id}');
  // }

}
