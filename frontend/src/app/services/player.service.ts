import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient)  {}

  getPlayers() : Observable<Object> {
    //console.log(this.http.get(`${this.uri}/players`));
    // return this.http.get(`${this.uri}/players/`);
    //then(res => return res.pipe(map(res => res.json()));
    //
    // pipe(map(res => res.json()));
    // fetch(`${this.uri}/players`)
    //   .then(data => {return data.json();})
    //   .then(res => console.log(res));
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
    //
    //return this.http.get('https://api.opendota.com/api/proPlayers');
  }
  //
  // getPlayerByID(id) {
  //   return this.http.get('${this.uri}/players/${id}');
  // }
  //
  // addPlayer(name, avatar, drafted) {
  //   const player = {
  //     name: name,
  //     avatar: avatar,
  //     drafted: drafted
  //   };
  //
  //   return this.http.post('${this.uri}/players/add', player);
  // }
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
