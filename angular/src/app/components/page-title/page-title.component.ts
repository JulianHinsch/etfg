import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'page-title',
    template: `
    <div class="row bg-primary">
        <div class="col-md-12 orange-background">
            <h1 style="white-space: pre;" class="text-center title">{{title}}</h1>
        </div>
    </div>`,
    styleUrls: ['./page-title.component.scss'],
})
export class PageTitle implements OnInit {
    
    @Input() title: string;

    ngOnInit() {
        if(this.title) {
            document.title=`ETFG | ${this.title}`;
        }
    }
}



