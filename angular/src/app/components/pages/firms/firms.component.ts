import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'firms-page',
    template: `
    <div class="container-fluid">
        <page-title title="Firms"></page-title>
        <div class="row justify-content-around">
            <div class="col-md-12">
                <view-toggle [(dataFilter)]="dataFilter"></view-toggle>
            </div>
            <div class="col-md-12">
                <firms-table *ngIf="dataFilter === 'student'"></firms-table>
                <firms-table *ngIf="dataFilter === 'professional'"></firms-table>
            </div>
        </div>
        </div>`,
    styleUrls: ['./firms.component.scss']
})
export class FirmsComponent {
    dataFilter: string = this.auth.getDataFilter();

    constructor(private auth: AuthService) {}
}
