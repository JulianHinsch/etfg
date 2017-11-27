import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerTableComponent } from './issuer-table.component';

describe('IssuerTableComponent', () => {
  let component: IssuerTableComponent;
  let fixture: ComponentFixture<IssuerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
