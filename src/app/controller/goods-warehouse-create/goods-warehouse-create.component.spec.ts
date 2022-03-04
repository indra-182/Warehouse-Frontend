import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsWarehouseCreateComponent } from './goods-warehouse-create.component';

describe('GoodsWarehouseCreateComponent', () => {
  let component: GoodsWarehouseCreateComponent;
  let fixture: ComponentFixture<GoodsWarehouseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsWarehouseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsWarehouseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
