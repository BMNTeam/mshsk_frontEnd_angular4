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
    errMessage = '';
    successMessage = '';
   constructor( public auth: AuthService) {

   }

   ngOnInit() {
   }

   test(form) {
       this.auth.sendEmailToSupport(form).subscribe(
           (res) => {
               const resJson = res;
               console.dir(resJson);
               if (resJson.status === 'ok') {
                   this.successMessage = resJson.message;
                   this.errMessage = '';
               } else {
                   this.errMessage = resJson.message;
                   this.successMessage = '';
               }
           }
       )
   }

}
