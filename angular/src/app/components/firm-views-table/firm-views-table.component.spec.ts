import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmTableComponent } from './firm-table.component';

describe('FirmTableComponent', () => {
  let component: FirmTableComponent;
  let fixture: ComponentFixture<FirmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
