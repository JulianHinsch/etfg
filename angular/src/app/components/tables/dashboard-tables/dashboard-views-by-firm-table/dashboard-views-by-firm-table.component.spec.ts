import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewsByFirmTable } from './dashboard-views-by-firm-table.component';

describe('ViewsByFirmTableComponent', () => {
  let component: DashboardViewsByFirmTable;
  let fixture: ComponentFixture<DashboardViewsByFirmTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewsByFirmTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewsByFirmTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
