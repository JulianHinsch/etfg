import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetFirmInfoByIdService } from '../../../services/firms/get-firm-info-by-id.service';
import { GetProductInfoByTickerService } from '../../../services/products/get-product-info-by-ticker.service';
import { AuthService } from '../../../auth/auth.service';

import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'fp-combo',
    templateUrl: './fp-combo.component.html',
    styleUrls: ['./fp-combo.component.scss']
})
export class FpComboComponent {
    productSubscription: Subscription;
    firmSubscription: Subscription;
    pageTitle: string;
    firmId: number;
    ticker: string;
    firmData: object;
    productData: object;

    constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private productService: GetProductInfoByTickerService, private firmService: GetFirmInfoByIdService) {
        document.title = 'ETFG';
        this.route.params.subscribe(params => {
            this.firmId = params.id;
            this.ticker = params.ticker;
        });
        this.firmSubscription = this.firmService.getInfoById(this.firmId).subscribe(response => {
            const data = response.json();
            this.firmData = data;
            //reject users with wrong permissions
            if (!this.auth.getIsSuperUser()) {
                if ((this.auth.getDataFilter() === 'student' && data.type === 0) || (this.auth.getDataFilter() === 'professional' && data.type === 1)) {
                    this.router.navigate(['/dashboard']);
                }
            }
            if(this.pageTitle) {
                this.pageTitle = this.pageTitle.concat("\n\n"+` ${data.name}`);              
            } else {
                this.pageTitle = `${data.name}`;
            }
            document.title = `ETFG | ${data.name}`;
        });
        this.productSubscription = this.productService.getInfoByTicker(this.ticker).subscribe(response => {
            const data = response.json();
            this.productData = data;
            if(this.pageTitle) {
                this.pageTitle = this.pageTitle.concat("\n\n"+` ${data.ticker} ${data.name}`);              
            } else {
                this.pageTitle = `${data.ticker} ${data.name}`;
            }
        });
    }

    ngOnDestroy() {
        this.firmSubscription.unsubscribe();
        this.productSubscription.unsubscribe();
    }
}
