import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsWarehouseListComponent } from './goods-warehouse-list.component';

describe('GoodsWarehouseListComponent', () => {
  let component: GoodsWarehouseListComponent;
  let fixture: ComponentFixture<GoodsWarehouseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsWarehouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsWarehouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
