import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmProductCombinationTable } from './firm-product-combination-table.component';

describe('FirmProductCombinationTable', () => {
  let component: FirmProductCombinationTable;
  let fixture: ComponentFixture<FirmProductCombinationTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmProductCombinationTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmProductCombinationTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
