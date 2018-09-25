import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'products-page',
    template: `
    <div class="container-fluid">
        <page-title title="Products"></page-title>
        <div class="row justify-content-around">
            <!--<div class="col-md-12">
                <view-toggle [(dataFilter)]="dataFilter"></view-toggle>
            </div>-->
            <div class="col-md-12">
                <products-table *ngIf="dataFilter === 'student'"></products-table>
                <products-table *ngIf="dataFilter === 'professional'"></products-table>                     
            </div>
        </div>
    </div>`,
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

    dataFilter: string = this.auth.getDataFilter();

    constructor(private auth: AuthService) {}
}