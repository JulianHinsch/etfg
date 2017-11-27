import { Component, OnInit, Input } from '@angular/core';
import { FpComboService } from '../../services/fp-combo/fp-combo.service';
import { FpComboSource } from '../../data-sources/fp-combo';

@Component({
  selector: 'fp-combo-table',
  templateUrl: './fp-combo-table.component.html',
  styleUrls: ['./fp-combo-table.component.scss']
})
export class FpComboTableComponent implements OnInit {
  @Input() firmId: number;
  @Input() ticker: string;
  public dataSource: FpComboSource;
  public isLoaded = false;

  displayedColumns = ['num','date','location','type','portfolio'];

  constructor(private service: FpComboService) { }

  ngOnInit() {
    this.dataSource = new FpComboSource(this.service, this.firmId, this.ticker);    
    setTimeout(()=>{this.isLoaded=true}, 1000);
  }
}