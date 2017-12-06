import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsByActionPieComponent } from './product-views-by-action-pie.component';

describe('ProductViewsByActionPieComponent', () => {
  let component: ProductViewsByActionPieComponent;
  let fixture: ComponentFixture<ProductViewsByActionPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewsByActionPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewsByActionPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
