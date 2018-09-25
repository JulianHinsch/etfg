import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsByTypePie } from './product-views-by-type-pie.component';

describe('ProductViewsByActionPie', () => {
  let component: ProductViewsByTypePie;
  let fixture: ComponentFixture<ProductViewsByTypePie>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewsByTypePie ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewsByTypePie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
