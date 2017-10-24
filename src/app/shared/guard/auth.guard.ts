import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user.authorized === 'OK') {
                return true;
            }
        }


        this.router.navigate(['/login']);
        return false;
    }
}
