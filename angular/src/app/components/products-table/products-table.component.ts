import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { Observable, Subscriber } from 'rxjs';

import { GetAllProductsService } from '../../services/products/get-all-products.service';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  data: any;
  dataSource = new MatTableDataSource<any>(this.data);
  displayedColumns = ['id', 'ticker', 'name', 'issuer', 'views'];
  length = 100;
  pageSize = 10;
  pageSizeOptions = [10,20,50,100];
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isLoaded = false;
  onCompleted = () => {
    this.isLoaded = true;
  }

  constructor(private service: GetAllProductsService) {
    this.data=this.getData();
    setTimeout(()=>{this.onCompleted()}, 1000);
  }

  getData() {
    return Observable.create(subscriber => {
      this.service.getAll().subscribe(response => {
        let data = response.json();
        let count = 1;
        data.map(row => {
            row.rowNumber = (count+'.');
            count++;
            row.ticker = row.ticker.toUpperCase();
            return row;
        });
        subscriber.next(data);
      });
    })
  }

  ngOnInit() {}
}
