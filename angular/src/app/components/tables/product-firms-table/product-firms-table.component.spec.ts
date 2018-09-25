import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFirmsTable } from './product-firms-table.component';

describe('ProductFirmsTable', () => {
  let component: ProductFirmsTable;
  let fixture: ComponentFixture<ProductFirmsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFirmsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFirmsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
