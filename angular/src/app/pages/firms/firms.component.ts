import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'firms',
  template: `<div class="container-fluid">
              <page-title title="Firms"></page-title>
              <div class="row justify-content-around">
                <div class="col-md-12">
                  <div class="mat-elevation-z4">
                    <firms-table></firms-table>
                  </div>
                </div>
              </div>
            </div>`,
  styleUrls: ['./firms.component.scss']
})
export class FirmsComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
