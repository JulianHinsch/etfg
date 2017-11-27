import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewsByFirmTableComponent } from './dashboard-views-by-firm-table.component';

describe('ViewsByFirmTableComponent', () => {
  let component: DashboardViewsByFirmTableComponent;
  let fixture: ComponentFixture<DashboardViewsByFirmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewsByFirmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewsByFirmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
