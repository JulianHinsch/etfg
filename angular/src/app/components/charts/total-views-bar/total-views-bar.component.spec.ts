import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalViewsBarComponent } from './total-views-bar.component';

describe('TotalViewsBarComponent', () => {
  let component: TotalViewsBarComponent;
  let fixture: ComponentFixture<TotalViewsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalViewsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalViewsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
