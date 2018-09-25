import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

import { GetProductInfoByTickerService } from '../../../services/products/get-product-info-by-ticker.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class Product {

    private dataFilter: string = this.auth.getDataFilter();
    private subscription: Subscription;
    private pageTitle: string;
    private ticker: string;
    private data: object;

    constructor(private route: ActivatedRoute, private service: GetProductInfoByTickerService, private auth: AuthService) {
        document.title = 'ETFG';
        this.route.params.subscribe(params => this.ticker = params.ticker);
        this.subscription = this.service.getInfoByTicker(this.ticker).subscribe(response => {
            const data = response.json();
            this.data = data;
            this.pageTitle = `${data.ticker} - ${data.name}`;
            document.title = `ETFG | ${data.ticker}`;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}