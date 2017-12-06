import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmsTableComponent } from './firms-table.component';

describe('FirmsTableComponent', () => {
  let component: FirmsTableComponent;
  let fixture: ComponentFixture<FirmsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
