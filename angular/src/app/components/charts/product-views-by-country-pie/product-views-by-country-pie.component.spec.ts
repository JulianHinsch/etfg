import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsByCountryPieComponent } from './product-views-by-country-pie.component';

describe('ProductViewsByCountryPieComponent', () => {
  let component: ProductViewsByCountryPieComponent;
  let fixture: ComponentFixture<ProductViewsByCountryPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewsByCountryPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewsByCountryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
