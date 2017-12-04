import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GetFirmInfoByIdService } from '../../services/firms/get-firm-info-by-id.service';

import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.scss']
})
export class FirmComponent {
  subscription: Subscription;
  pageTitle: string;
  firmId: number;
  data: object;

  constructor(private route: ActivatedRoute, private service: GetFirmInfoByIdService) {
    document.title = 'ETFG';
    this.route.params.subscribe(params => this.firmId = params.id);
    this.subscription = this.service.getInfoById(this.firmId).subscribe(response => {
      const data = response.json();
      this.data = data;
      this.pageTitle = data.name;
      document.title = `ETFG | ${data.name}`;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}