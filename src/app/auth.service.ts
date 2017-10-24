import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

@Injectable()
export class AuthService {
  data: any = {};
  user: any  = {};

  constructor(private http: Http) {}

  authorizeUser(authInfo) {
    return this.http.post('http://localhost:8080/api/login', authInfo).map(
        data => {
           return data.json()
        }
    )
  }

  signUp(data) {
      const userData = {
          email: data.email,
          password: data.password,
          fullName: data.fullName
      };
      return this.http.post('http://localhost:8080/api/add-user', userData)
          .map( res => {
              const jsonUser = res.json();
              this.user.name = jsonUser.fullName;
              console.log(this.user);
              return jsonUser;
          })
  }

}
