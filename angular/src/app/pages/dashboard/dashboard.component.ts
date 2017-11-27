import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isLoaded = false;
  public onCompleted = () => {
    this.isLoaded = true;
  }

  displayedColumns = ['id', 'name', 'views'];
  constructor(public auth: AuthService) { }

  ngOnInit() {
    setTimeout(()=>{this.onCompleted()}, 1000);    
  }
}