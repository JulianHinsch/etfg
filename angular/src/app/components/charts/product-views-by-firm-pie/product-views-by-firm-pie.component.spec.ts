import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsByFirmPie } from './product-views-by-firm-pie.component';

describe('ProductViewsByFirmPie', () => {
  let component: ProductViewsByFirmPie;
  let fixture: ComponentFixture<ProductViewsByFirmPie>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewsByFirmPie ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewsByFirmPie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
