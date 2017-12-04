import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GetFirmInfoByIdService } from '../../services/firms/get-firm-info-by-id.service';
import { GetProductInfoByTickerService } from '../../services/products/get-product-info-by-ticker.service';

import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'fp-combo',
  templateUrl: './fp-combo.component.html',
  styleUrls: ['./fp-combo.component.scss']
})
export class FpComboComponent {
  isLoaded = false;
  productSubscription: Subscription;
  firmSubscription: Subscription;
  pageTitle: string;
  firmId: number;
  ticker: string;
  firmData: object;
  productData: object;

  constructor(private route: ActivatedRoute, private productService: GetProductInfoByTickerService, private firmService: GetFirmInfoByIdService) {
    document.title = 'ETFG';
    this.route.params.subscribe(params => {
      this.firmId = params.id;
      this.ticker = params.ticker;
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
    this.firmSubscription = this.firmService.getInfoById(this.firmId).subscribe(response => {
      const data = response.json();
      this.firmData = data;
      if(this.pageTitle) {
        this.pageTitle = this.pageTitle.concat("\n\n"+` ${data.name}`);              
      } else {
        this.pageTitle = `${data.name}`;
      }
      document.title = `ETFG | ${data.name}`;
    });
  }

  ngOnDestroy() {
    this.firmSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
  }
}
