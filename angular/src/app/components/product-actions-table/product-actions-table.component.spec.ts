import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActionsTableComponent } from './product-actions-table.component';

describe('ProductActionsTableComponent', () => {
  let component: ProductActionsTableComponent;
  let fixture: ComponentFixture<ProductActionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductActionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductActionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
