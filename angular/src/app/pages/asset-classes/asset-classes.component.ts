import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asset-classes',
  template: `<div class="container-fluid">
              <page-title title="Asset Classes"></page-title>
              <div class="row justify-content-around">
                  <div class="col-md-12">
                  <div class="mat-elevation-z4">
                      <asset-classes-table></asset-classes-table>
                  </div>
                  </div>
              </div>
            </div>`,
  styleUrls: ['./asset-classes.component.scss']
})
export class AssetClassesComponent implements OnInit {

  firms;
  constructor() { }

  ngOnInit() {
    
  }

}
