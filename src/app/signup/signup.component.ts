import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router} from "@angular/router";
import {AuthService} from "../auth.service";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    public err: string = '';

    constructor(private auth: AuthService, private router:Router) { }

    ngOnInit() { }

    onSubmit(value) {
        this.auth.signUp(value).subscribe( data => {
            console.log(data);
            if (data.status === 'ok') {
               localStorage.setItem('user', JSON.stringify(data) );
               this.router.navigate(['/dashboard']);
            } else {
                this.err = data.message;
            }
        })
    }

    isNotEmpty (event) {
        console.log(event);
        if (event.srcElement.value === '') {
            this.err = 'Введите имя пользователя'
        }
    }

    isTheSamePasswords (data) {
        console.log(data);
        if (data.password !== data.repeatPassword) {
           this.err = 'Пароли не совпадают';
        } else {
            this.err = '';
        }
    }





}
