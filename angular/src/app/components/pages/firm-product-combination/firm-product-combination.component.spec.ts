import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmProductCombination } from './firm-product-combination.component';

describe('FirmProductCombination', () => {
  let component: FirmProductCombination;
  let fixture: ComponentFixture<FirmProductCombination>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmProductCombination ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmProductCombination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
