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
        },
        coefficients: {
            sok: 0,
            pok: 0,
            oi: 0,
            zap: 0
        }
    };
    financialAnalyzeCoefficients = [];
    financialTypeAnalyzeCoefficients = [];
    errMessage = 'Введите данные Бухгалтерского баланса';
    closed = true;

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

        // Fill array with coefficients
        this.k1();
        this.k2();
        this.k3();
        this.k4();
        this.k5();
        this.k6();
        this.dsk();
        this.ddzk();
        this.sok();
        this.dsok();
        this.dzk();
        this.kmk();

        this.zap();
        this.financialTypeAnalyzeCoefficients.push(
            this.makeCoefficient('Собственный оборотный капитал', 'Сок', this.defaultData.coefficients.sok));
        this.pok();
        this.oi();
        this.deltaSok();

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

    makeCoefficient(name, definition, data) {
        const coefiicitnt = {
            id: Math.round(Math.random()),
            name: name,
            definition: definition,
            data: data
        };
        return coefiicitnt;
    }

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
        this.financialAnalyzeCoefficients.push(k1);

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
        this.financialAnalyzeCoefficients.push(k2);
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
        this.financialAnalyzeCoefficients.push(k3)
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
        this.financialAnalyzeCoefficients.push(k4);
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
        this.financialAnalyzeCoefficients.push(k5);
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
        this.financialAnalyzeCoefficients.push(k6)
    }

    dsk() {
        let coefficient;
        coefficient = (this.defaultData.dataSums.p1100 - this.defaultData.dataSums.p1400) / this.defaultData.dataSums.p1100;
        const dsk = {
            id: 7,
            name: 'Доля собственного капитала в формировании',
            definition: 'Дск',
            data: coefficient
        };
        this.financialAnalyzeCoefficients.push(dsk)
    }

    ddzk() {
        let coefficient;
        coefficient = this.defaultData.dataSums.p1400 / this.defaultData.dataSums.p1100;
        const ddzk = {
            id: 8,
            name: 'Доля долгосрочного заемного капитала в формировании внеоборотных активов',
            definition: 'Ддзк',
            data: coefficient
        };
        this.financialAnalyzeCoefficients.push(ddzk);
    }

    sok() {
        let coefficient;
        coefficient = this.defaultData.dataSums.p1200 - (this.defaultData.dataSums.p1500 - this.userData['p1530'] -
            this.userData['p1540']);
        const sok = {
            id: 9,
            name: 'Сумма собственного оборотного капитала',
            definition: 'СОК',
            data: coefficient
        };
        this.defaultData.coefficients.sok = sok.data;
        this.financialAnalyzeCoefficients.push(sok);
    }

    dsok() {
        let coefficient;
        coefficient = (this.defaultData.dataSums.p1200 - (this.defaultData.dataSums.p1500 - this.userData['p1530'] -
            this.userData['p1540']) ) / this.defaultData.dataSums.p1200;
        const dsok = {
            id: 10,
            name: 'Доля собственного оборотного капитала в формировании оборотных активов',
            definition: 'Дсок',
            data: coefficient
        };
        this.financialAnalyzeCoefficients.push(dsok);
    }

    dzk() {
        let coefficient;
        coefficient = this.defaultData.dataSums.p1500 / this.defaultData.dataSums.p1200;
        const dzk = {
            id: 11,
            name: 'Доля заемного капитала в формировании оборотных активов ',
            definition: 'Дзк',
            data: coefficient
        };
        this.financialAnalyzeCoefficients.push(dzk);
    }

    kmk() {
        let coefficient;
        coefficient = this.defaultData.coefficients.sok / this.defaultData.dataSums.p1300;
        const kmk = {
            id: 12,
            name: 'Коэффициент маневренности капитала (доля собственного капитала в обороте)',
            definition: 'Кмк',
            data: coefficient
        };
        this.financialAnalyzeCoefficients.push(kmk);
    }

    zap() {
        let coefficient;
        coefficient = this.userData['a1210'];
        const zap = {
            id: 13,
            name: 'Запасы',
            definition: 'Зап',
            data: coefficient
        };
        this.defaultData.coefficients.zap = coefficient;
        this.financialTypeAnalyzeCoefficients.push( zap );
    }

    pok() {
        let coefficient;
        coefficient = this.defaultData.coefficients.sok + this.defaultData.dataSums.p1400;
        const pok = {
            id: 13,
            name: 'Перманентный оборотный капитал',
            definition: 'ПОК',
            data: coefficient
        };
        this.defaultData.coefficients.pok = coefficient;
        this.financialTypeAnalyzeCoefficients.push(pok);
    }

    oi() {
        let coefficient;
        coefficient = this.defaultData.coefficients.pok + this.defaultData.dataSums.p1500;
        const oi = {
            id: 14,
            name: 'Общая величина основных источников формирования запасов',
            definition: 'ОИ',
            data: coefficient
        };
        this.defaultData.coefficients.oi = coefficient;
        this.financialTypeAnalyzeCoefficients.push(oi);
    }

    deltaSok() {
        let coefficient;
        coefficient = this.defaultData.coefficients.sok - this.defaultData.coefficients.zap;
        const deltaSok = {
            id: 15,
            name: 'Излишек (+) или недостаток (-) собственного оборотного капитала (СОК)',
            definition: 'ΔСОК',
            data: coefficient
        };
        this.financialTypeAnalyzeCoefficients.push(deltaSok)
    };




    showUser() {
        console.dir(this.data.userData);
    }

    closeAlert() {
        this.closed = false;
    }

}
