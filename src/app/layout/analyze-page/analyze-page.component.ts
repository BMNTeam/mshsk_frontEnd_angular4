import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../router.animations";
import {DataService} from "../../data.service";


@Component({
    selector: 'app-analyze-page',
    templateUrl: './analyze-page.component.html',
    styleUrls: ['./analyze-page.component.scss'],
    animations: [routerTransition()]
})
export class AnalyzePageComponent implements OnInit {
    userData = {};
    defaultData = {
        sums: {
            p1100: () => {},
            p1200: () => {},
            p1300: () => {},
            p1400: () => {},
            p1500: () => {}
        },
        dataDefault: {},
        dataSums: {
            p1100: 0,
            p1200: 0,
            p1300: 0,
            p1400: 0,
            p1500: 0,
            p1600: 0,
            p1700: 0
        }
    };
    coefficients = [];
    errMessage = 'Введите данные Бухгалтерского баланса';

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('userData'));
        if (this.userData === null) {
            return;
        }
        this.defaultData.dataDefault = {
            k1: () => {
                let k1;
                k1 = this.userData
            }
        };
        // Count sums and set it to the variable
        this.countBalanceSum();
        this.defaultData.sums.p1100();
        this.defaultData.sums.p1200();
        this.defaultData.sums.p1300();
        this.defaultData.sums.p1400();
        this.defaultData.sums.p1500();
        this.defaultData.dataSums.p1600 = this.defaultData.dataSums.p1100 + this.defaultData.dataSums.p1200;
        this.defaultData.dataSums.p1700 = this.defaultData.dataSums.p1300 + this.defaultData.dataSums.p1400 +
            this.defaultData.dataSums.p1500;

        this.k1();
        this.k2();
        this.k3();
        this.k4();
        this.k5();
        this.k6();

    }
    // Count balance sums
    countBalanceSum() {
        this.defaultData.sums = {
            p1100: () => {
                let p1100;
                p1100 = this.userData['a1110'] +
                    this.userData['a1120'] +
                    this.userData['a1130'] +
                    this.userData['a1140'] +
                    this.userData['a1150'] +
                    this.userData['a1160'] +
                    this.userData['a1170'] +
                    this.userData['a1180'] +
                    this.userData['a1190'];
                this.defaultData.dataSums.p1100 = p1100;
                return p1100;
            },
            p1200: () => {
                let p1200;
                p1200 = this.userData['a1210'] +
                    this.userData['a1220'] +
                    this.userData['a1230'] +
                    this.userData['a1240'] +
                    this.userData['a1250'] +
                    this.userData['a1260'];
                this.defaultData.dataSums.p1200 = p1200;
                return p1200;
            },
            p1300: () => {
                let p1300;
                p1300 = this.userData['p1310'] +
                    this.userData['p1320'] +
                    this.userData['p1340'] +
                    this.userData['p1350'] +
                    this.userData['p1360'] +
                    this.userData['p1370'];
                this.defaultData.dataSums.p1300 = p1300;
                return p1300;
            },
            p1400: () => {
                let p1400;
                p1400 = this.userData['p1410'] +
                    this.userData['p1420'] +
                    this.userData['p1440'] +
                    this.userData['p1450'];
                this.defaultData.dataSums.p1400 = p1400;
                return p1400;
            },
            p1500: () => {
                let p1500;
                p1500 = this.userData['p1510'] +
                    this.userData['p1520'] +
                    this.userData['p1530'] +
                    this.userData['p1540'] +
                    this.userData['p1550'];
                this.defaultData.dataSums.p1500 = p1500;
                return p1500;
            }
        };
        this.defaultData.sums.p1100();
    };

    k1() {
        let coefficient;
        coefficient = this.defaultData.dataSums.p1300 / this.defaultData.dataSums.p1700;
        console.dir(this.defaultData.dataSums);
        const k1 = {
            id: 1,
            name: 'Коэффициент финансовой автономии (или независимости)',
            definition: 'K1',
            data: coefficient,

        };
        this.coefficients.push(k1);

    }

    k2() {
        let coefficient;
        coefficient = (this.defaultData.dataSums.p1400 + this.defaultData.dataSums.p1500) / this.defaultData.dataSums.p1700;
        const k2 = {
            id: 2,
            name: 'Коэффициент финансовой зависимости',
            definition: 'K2',
            data: coefficient
        };
        this.coefficients.push(k2);
    }

    k3() {
        let coefficient;
        coefficient = this.defaultData.dataSums.p1500 / this.defaultData.dataSums.p1700;
        const k3 = {
            id: 3,
            name: 'Коэффициент текущей задолженности',
            definition: 'K3',
            data: coefficient
        };
        this.coefficients.push(k3)
    };

    k4() {
        let coefficient;
        coefficient = (this.defaultData.dataSums.p1300 + this.defaultData.dataSums.p1400) / this.defaultData.dataSums.p1700;
        const k4 = {
            id: 4,
            name: 'Коэффициент долгосрочной финансовой независимости (коэффициент финансовой устойчивости)',
            definition: 'K4',
            data: coefficient
        };
        this.coefficients.push(k4);
    }

    k5() {
        let coefficient;
        coefficient = this.defaultData.dataSums.p1300 / (this.defaultData.dataSums.p1400 + this.defaultData.dataSums.p1500);
        const k5 = {
            id: 5,
            name: 'Коэффициент покрытия долгов собственным капиталом (коэффициент платежеспособности)',
            definition: 'K5',
            data: coefficient
        };
        this.coefficients.push(k5);
    }

    k6() {
        let coefficient;
        coefficient = (this.defaultData.dataSums.p1400 + this.defaultData.dataSums.p1500) / this.defaultData.dataSums.p1300;
        const k6 = {
            id: 6,
            name: 'Коэффициент финансового левериджа (коэффициент финансового риска)',
            definition: 'K6',
            data: coefficient
        };
        this.coefficients.push(k6)
    }


    showUser() {
        console.dir(this.data.userData);
    }

}
