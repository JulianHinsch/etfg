import { Component, OnInit, Input } from '@angular/core';

import { FirmActionsSource } from '../../data-sources/firm-actions';

import { GetActionsByFirmIdService } from '../../services/firms/get-actions-by-firm-id.service';

@Component({
  selector: 'firm-actions-table',
  templateUrl: './firm-actions-table.component.html',
  styleUrls: ['./firm-actions-table.component.scss']
})
export class FirmActionsTableComponent implements OnInit {
  @Input() firmId: number;
  public dataSource: FirmActionsSource;
  public isLoaded = false;

  displayedColumns = ['num','date','location','type','portfolio'];
  
  constructor(private service: GetActionsByFirmIdService) {}

  ngOnInit() {
    this.dataSource = new FirmActionsSource(this.firmId, this.service);    
    setTimeout(()=>{this.isLoaded=true}, 1000);
  }
}