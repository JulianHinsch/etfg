import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActionsTable } from './product-actions-table.component';

describe('ProductActionsTable', () => {
  let component: ProductActionsTable;
  let fixture: ComponentFixture<ProductActionsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductActionsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductActionsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
