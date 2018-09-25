import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsByTypePie } from './views-by-type-pie.component';

describe('ViewsByTypePie', () => {
  let component: ViewsByTypePie;
  let fixture: ComponentFixture<ViewsByTypePie>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsByTypePie ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsByTypePie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
