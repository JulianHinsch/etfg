import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsByFirmPieComponent } from './product-views-by-firm-pie.component';

describe('ProductViewsByFirmPieComponent', () => {
  let component: ProductViewsByFirmPieComponent;
  let fixture: ComponentFixture<ProductViewsByFirmPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewsByFirmPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewsByFirmPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
