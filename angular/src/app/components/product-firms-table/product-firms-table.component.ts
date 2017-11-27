import { Component, OnInit, Input } from '@angular/core';

import { ProductFirmsSource } from '../../data-sources/product-firms';

import { GetFirmsByTickerService } from '../../services/products/get-firms-by-ticker.service';

@Component({
  selector: 'product-firms-table',
  templateUrl: './product-firms-table.component.html',
  styleUrls: ['./product-firms-table.component.scss']
})
export class ProductFirmsTableComponent implements OnInit {
  @Input() ticker: string;
  private dataSource: ProductFirmsSource;

  displayedColumns = ['num','firm','users','views'];

  constructor(private service: GetFirmsByTickerService) {}

  ngOnInit() {
    this.dataSource = new ProductFirmsSource(this.ticker, this.service);
  }
}
