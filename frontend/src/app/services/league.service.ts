import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Headers} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Object> {
     return this.http.get(`${this.uri}/players`);
 }

  getLeagues(): Observable<Object> {
    return this.http.get(`${this.uri}/players`);
  }

}
