import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmActionsTableComponent } from './firm-actions-table.component';

describe('FirmActionsTableComponent', () => {
  let component: FirmActionsTableComponent;
  let fixture: ComponentFixture<FirmActionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmActionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmActionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
