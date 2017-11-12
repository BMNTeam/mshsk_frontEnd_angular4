import { Injectable } from '@angular/core';
import { Http} from "@angular/http";

@Injectable()
export class AuthService {
  data: any = {};
  user = {};
  apiServer = 'http://localhost:8080';

  constructor(private http: Http) {}

  authorizeUser(authInfo) {
    return this.http.post(this.apiServer + '/api/login', authInfo).map(
        data => {
           const jsonUser = data.json();
           this.setUserData(jsonUser.user);
           return jsonUser;
        }
    )
  }

  signUp(data) {
      const userData = {
          email: data.email,
          password: data.password,
          fullName: data.fullName
      };
      return this.http.post(this.apiServer + '/api/add-user', userData)
          .map( res => {
              const jsonUser = res.json();
              this.setUserData(jsonUser.user);
              return jsonUser;
          })
  }

    setUserData(jsonUser) {
        if (jsonUser === undefined) {
            return;
        }
        this.user = {
            fullName: jsonUser.fullName,
            email: jsonUser.email
        };
        return jsonUser;
    }

    sendEmailToSupport(form) {
      const emailData = {
          email: form.email,
          userName: form.userName,
          message: form.message,
          captcha: form.captcha
      };
      return this.http.post(this.apiServer + '/api/send-email', emailData)
          .map( res => {
              return res.json();
          })
    }

}
