import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTable } from './products-table.component';

describe('ProductsTable', () => {
  let component: ProductsTable;
  let fixture: ComponentFixture<ProductsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
