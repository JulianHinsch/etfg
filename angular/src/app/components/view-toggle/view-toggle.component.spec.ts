import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToggle } from './view-toggle.component';

describe('ViewToggle', () => {
  let component: ViewToggle;
  let fixture: ComponentFixture<ViewToggle>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewToggle ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
