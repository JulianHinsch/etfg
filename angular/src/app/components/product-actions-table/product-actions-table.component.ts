import { Component, OnInit, Input } from '@angular/core';

import { ProductActionsSource } from '../../data-sources/product-actions';

import { GetActionsByTickerService } from '../../services/products/get-actions-by-ticker.service';

@Component({
  selector: 'product-actions-table',
  templateUrl: './product-actions-table.component.html',
  styleUrls: ['./product-actions-table.component.scss']
})
export class ProductActionsTableComponent implements OnInit {
  @Input() ticker: string;
  private dataSource: ProductActionsSource;

  displayedColumns = ['num','date','firm', 'location', 'type','portfolio'];

  constructor(private service: GetActionsByTickerService) {}

  ngOnInit() {
    this.dataSource = new ProductActionsSource(this.ticker, this.service);
  }
}
