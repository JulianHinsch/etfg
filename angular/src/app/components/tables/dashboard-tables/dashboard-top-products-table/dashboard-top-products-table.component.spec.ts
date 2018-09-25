import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopProductsTable } from './dashboard-top-products-table.component';

describe('DashboardTopProductsTable', () => {
  let component: DashboardTopProductsTable;
  let fixture: ComponentFixture<DashboardTopProductsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTopProductsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopProductsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
