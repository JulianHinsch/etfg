import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFirmsTableComponent } from './product-firms-table.component';

describe('ProductFirmsTableComponent', () => {
  let component: ProductFirmsTableComponent;
  let fixture: ComponentFixture<ProductFirmsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFirmsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFirmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
