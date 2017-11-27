import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

import { ProductsSource } from '../../../data-sources/products';

import { GetAllProductsService } from '../../../services/products/get-all-products.service';

@Component({
  selector: 'dashboard-my-products-table',
  templateUrl: './dashboard-my-products-table.component.html',
  styleUrls: ['./dashboard-my-products-table.component.scss']
})
export class DashboardMyProductsTableComponent implements OnInit {
  public dataSource: ProductsSource;
  
  displayedColumns = ['id', 'ticker', 'name', 'views'];
  
  //constructor(private service: GetAllProductsService, private onCompleted: any) {}
  constructor(private service: GetAllProductsService) {}

  ngOnInit() {
    this.dataSource = new ProductsSource(this.service);
    //this.dataSource = new ProductsSource(this.service, this.onCompleted);
  }

  filterChange(text: string) {
    this.dataSource.changeFilter(text);
  }
}