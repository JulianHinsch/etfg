import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetClassTableComponent } from './asset-class-table.component';

describe('AssetClassTableComponent', () => {
  let component: AssetClassTableComponent;
  let fixture: ComponentFixture<AssetClassTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetClassTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetClassTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
