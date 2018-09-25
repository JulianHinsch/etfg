import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firm } from './firm.component';

describe('Firm', () => {
  let component: Firm;
  let fixture: ComponentFixture<Firm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
