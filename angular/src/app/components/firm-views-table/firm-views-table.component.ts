import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { GetViewsByFirmIdService } from '../../services/firms/get-views-by-firm-id.service';

import { FirmViewsSource } from '../../data-sources/firm-views';

@Component({
  selector: 'firm-views-table',
  templateUrl: './firm-views-table.component.html',
  styleUrls: ['./firm-views-table.component.scss']
})
export class FirmViewsTableComponent implements OnInit {
  @Input() firmId: number;
  public dataSource: FirmViewsSource;
  private isLoaded = false;

  displayedColumns = ['num','ticker','name','issuer','views'];
  
  constructor(private service: GetViewsByFirmIdService) {}

  ngOnInit() {
    this.dataSource = new FirmViewsSource(this.firmId, this.service);    
    setTimeout(()=>{this.isLoaded=true}, 1000);
  }
}