import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfViewsPieComponent } from './types-of-views-pie.component';

describe('TypesOfViewsPieComponent', () => {
  let component: TypesOfViewsPieComponent;
  let fixture: ComponentFixture<TypesOfViewsPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfViewsPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfViewsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
