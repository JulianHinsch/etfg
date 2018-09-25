import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsByCountryPie } from './views-by-country-pie.component';

describe('ViewsByCountryPie', () => {
  let component: ViewsByCountryPie;
  let fixture: ComponentFixture<ViewsByCountryPie>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsByCountryPie ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsByCountryPie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
