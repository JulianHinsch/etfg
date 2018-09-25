import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Firms } from './firms.component';

describe('Firms', () => {
  let component: Firms;
  let fixture: ComponentFixture<Firms>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firms ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Firms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
