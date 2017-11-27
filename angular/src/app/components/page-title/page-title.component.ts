import { Component, Input, OnInit } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  @Input() title: string;

  ngOnInit() {
    if(this.title) {
      document.title=`ETFG | ${this.title}`;
    }
  }
}



