import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpComboComponent } from './fp-combo.component';

describe('FpComboComponent', () => {
  let component: FpComboComponent;
  let fixture: ComponentFixture<FpComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
