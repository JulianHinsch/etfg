import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  template: `<div class="container-fluid">
              <page-title title="Products"></page-title>
              <div class="row justify-content-around">
                <div class="col-md-12">
                  <products-table></products-table>
                </div>
              </div>
            </div>`,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}