export class AuthModel {
  email: string;
  id: string;
  password: string;
  token: string;
  type: string;
  username: string;


  constructor(email: string, id: string, password: string, token: string, type: string, username: string) {
    this.email = email;
    this.id = id;
    this.password = password;
    this.token = token;
    this.type = type;
    this.username = username;
  }
}
