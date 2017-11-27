import { Component, OnInit } from '@angular/core';

import { ProductsSource } from '../../data-sources/products';

import { GetAllProductsService } from '../../services/products/get-all-products.service';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  private isLoaded = false;
  private dataSource: ProductsSource;
  public onCompleted = () => {
    this.isLoaded = true;
  }

  displayedColumns = ['id', 'ticker', 'name', 'issuer', 'views'];
 
  constructor(private service: GetAllProductsService) {}

  ngOnInit() {
    this.dataSource = new ProductsSource(this.service);
    setTimeout(()=>{this.onCompleted()}, 1000);
  }
}
