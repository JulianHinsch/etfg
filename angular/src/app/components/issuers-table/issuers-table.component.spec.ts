import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuersTableComponent } from './issuers-table.component';

describe('IssuersTableComponent', () => {
  let component: IssuersTableComponent;
  let fixture: ComponentFixture<IssuersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
