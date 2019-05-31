export class User {
  name: string;
  email: string;
  username: string;
  leagues: string[]

  constructor(name: string,
  email: string,
  username: string,
  leagues: string[]) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.leagues = leagues;
  }
}
