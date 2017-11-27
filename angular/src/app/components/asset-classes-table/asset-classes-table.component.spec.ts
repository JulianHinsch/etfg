import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetClassesTableComponent } from './asset-classes-table.component';

describe('AssetClassesTableComponent', () => {
  let component: AssetClassesTableComponent;
  let fixture: ComponentFixture<AssetClassesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetClassesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetClassesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
