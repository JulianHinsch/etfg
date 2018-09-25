import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmActionsTable } from './firm-actions-table.component';

describe('FirmActionsTable', () => {
  let component: FirmActionsTable;
  let fixture: ComponentFixture<FirmActionsTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmActionsTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmActionsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
