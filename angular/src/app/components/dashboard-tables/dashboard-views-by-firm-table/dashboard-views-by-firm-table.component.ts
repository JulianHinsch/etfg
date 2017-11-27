import { Component, OnInit } from '@angular/core';

import { FirmsSource } from '../../../data-sources/firms';

import { GetAllFirmsService } from '../../../services/firms/get-all-firms.service';

@Component({
  selector: 'dashboard-views-by-firm-table',
  templateUrl: './dashboard-views-by-firm-table.component.html',
  styleUrls: ['./dashboard-views-by-firm-table.component.scss']
})
export class DashboardViewsByFirmTableComponent implements OnInit {
  public isLoaded = false;
  public dataSource: FirmsSource;

  displayedColumns = ['id', 'name', 'views'];
  
  constructor(private service: GetAllFirmsService) {}

  ngOnInit() {
    this.dataSource = new FirmsSource(this.service);
    setTimeout(()=>{this.isLoaded = true}, 1000);
  }
}
