import { Component, OnInit } from '@angular/core';

import { FirmsSource } from '../../data-sources/firms';

import { GetAllFirmsService } from '../../services/firms/get-all-firms.service';

@Component({
  selector: 'firms-table',
  templateUrl: './firms-table.component.html',
  styleUrls: ['./firms-table.component.scss']
})
export class FirmsTableComponent implements OnInit {
  public isLoaded = false;

  displayedColumns = ['id', 'name', 'users', 'views'];  
  public dataSource: FirmsSource;

  constructor(private service: GetAllFirmsService) {}

  ngOnInit() {
    this.dataSource = new FirmsSource(this.service);
    setTimeout(()=>{this.isLoaded = true}, 1000);
  }
}
