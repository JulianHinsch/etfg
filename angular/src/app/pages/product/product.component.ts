import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

import { GetProductInfoByTickerService } from '../../services/products/get-product-info-by-ticker.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private subscription: Subscription;
  private pageTitle: string;
  private ticker: string;
  private data: object;

  public isLoaded = false;

  constructor(private route: ActivatedRoute, private service: GetProductInfoByTickerService) {
    document.title = 'ETFG';
    this.route.params.subscribe(params => this.ticker = params.ticker);
    this.subscription = this.service.getInfoByTicker(this.ticker).subscribe(response => {
      const data = response.json();
      console.log(data);
      this.data = data;
      this.pageTitle = `${data.ticker} - ${data.name}`;
      document.title = `ETFG | ${data.ticker}`;
    });
  }

  ngOnInit() {
    setTimeout(()=>{this.isLoaded = true},1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}