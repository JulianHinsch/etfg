import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopProductsTableComponent } from './dashboard-top-products-table.component';

describe('DashboardTopProductsTableComponent', () => {
  let component: DashboardTopProductsTableComponent;
  let fixture: ComponentFixture<DashboardTopProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTopProductsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
