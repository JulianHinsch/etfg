import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpComboTableComponent } from './fp-combo-table.component';

describe('FpComboTableComponent', () => {
  let component: FpComboTableComponent;
  let fixture: ComponentFixture<FpComboTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpComboTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpComboTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
