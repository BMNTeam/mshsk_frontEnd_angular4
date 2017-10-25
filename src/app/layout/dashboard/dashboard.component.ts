import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'Первый слайдер',
            text: 'Дополнительная информация по факультету'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Второй слайдер',
            text: 'Очень интересная информация'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Третий слайдер',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Для использования сервиса обратитесь к технической документации`
        }, {
            id: 2,
            type: 'warning',
            message: `Все дополнительные вопросы вы можете задать в нашу службу поддрежки`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
