export class User {
  name: string;
  email: string;
  username: string;
  leagues: number[]

  constructor(name: string,
  email: string,
  username: string,
  leagues: number[]) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.leagues = leagues;
  }
}
