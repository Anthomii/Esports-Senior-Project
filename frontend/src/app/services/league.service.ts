import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Object> {
     return this.http.get('https://api.opendota.com/api/proPlayers');
 }

 getLeagues(): Observable<Object> {
    return this.http.get('https://api.opendota.com/api/leagues');
 }
}
