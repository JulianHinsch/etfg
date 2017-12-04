import { Component, Input } from '@angular/core';

@Component({
    selector: 'firms-page',
    template: `
    <div class="container-fluid">
        <page-title title="Firms"></page-title>
        <div class="row justify-content-around">
            <div class="col-md-12">
                <firms-table></firms-table>
            </div>
        </div>
        </div>`,
    styleUrls: ['./firms.component.scss']
})
export class FirmsComponent {}
