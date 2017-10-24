import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    arr: any = {};

    constructor(public router: Router, private auth: AuthService) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'false');
    }

    onSubmit(form) {
        const authInfo = {
            email: form.email,
            password: form.password
        };

        this.auth.authorizeUser(authInfo).subscribe(
            data => {
                console.log(data);
                if (data.authorized === 'OK') {
                    localStorage.setItem('user', JSON.stringify(data) );
                    this.router.navigate(['/dashboard'])
                } else {
                    localStorage.setItem('user', '{}');
                }
            }
        )
    }

}
