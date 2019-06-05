import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
//import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
//import { map } from 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  static user: any;

  uri = 'http://localhost:3000';

  selectedUser : User = {
    name: '',
    email: '',
    username: '',
    leagues: []
  }

  constructor(private http: HttpClient) {
    AuthService.user = null;
  }

  getUser(user : String) {
    return this.http.get(`${this.uri}/users/${user}`);
  }

  updateUser(newUser) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.uri}/users/update`, newUser, {headers: headers});
  }


  getAllUsers() {
    const data = Observable.create(observer => {
      fetch(`${this.uri}/users`)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
    data.subscribe(data => {return data;});
    return data;

    // return this.http.get(`${this.uri}/users/`).subscribe(
    //   res => {
    //     console.log("HELLO!!!");
    //     console.log(res.json());
    //     //return res.json();
    //   },
    //   err => {
    //     throw(err);
    // });
  }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
      //.pipe(map(res => res.json()));
  }



  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers});
      //.pipe(map(res => JSON.stringify(res)));
  }

  getProfile() {
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers});
      //.pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    AuthService.user = user;

    console.log("STORING USER DATA: ");
    console.log(AuthService.user);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    let jwtHelper = new JwtHelperService();
    if(localStorage.id_token == undefined)
      return false;
    return !jwtHelper.isTokenExpired(localStorage.id_token);
  }

  logout() {
    this.authToken = null;
    AuthService.user = null;
    localStorage.clear();
  }
}
