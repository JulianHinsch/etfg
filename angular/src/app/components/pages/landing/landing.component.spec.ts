import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing } from './landing.component';

describe('Landing', () => {
  let component: Landing;
  let fixture: ComponentFixture<Landing>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
