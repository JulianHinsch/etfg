import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMyProductsTableComponent } from './dashboard-my-products-table.component';

describe('MyProductsComponent', () => {
  let component: DashboardMyProductsTableComponent;
  let fixture: ComponentFixture<DashboardMyProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMyProductsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMyProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
