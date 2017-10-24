import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from "../auth.service";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    constructor(private auth: AuthService) { }

    ngOnInit() { }

    onSubmit(value) {
        this.auth.signUp(value).subscribe( data => {
            console.log(data);
            if (data.authorized == 'OK') {
               localStorage.setItem('user', JSON.stringify(data) )
            }
        })
    }

}
