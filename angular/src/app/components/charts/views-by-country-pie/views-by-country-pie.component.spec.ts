import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsByCountryPieComponent } from './views-by-country-pie.component';

describe('ViewsByCountryPieComponent', () => {
  let component: ViewsByCountryPieComponent;
  let fixture: ComponentFixture<ViewsByCountryPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsByCountryPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsByCountryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
