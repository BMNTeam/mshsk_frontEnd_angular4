import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../router.animations";
import {AuthService} from "../../auth.service";



@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss'],
    animations: [routerTransition()]
})
export class ContactsPageComponent implements OnInit {
    sliders = [];
   constructor( public auth: AuthService) {

   }

   ngOnInit() {
        console.dir(this.sliders);
   }

   test(form) {
       this.auth.sendEmailToSupport(form).subscribe(
           (res) => {
               console.dir(res);
           }
       )
   }

}
