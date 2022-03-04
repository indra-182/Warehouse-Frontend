import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWare2storeComponent } from './create-ware2store.component';

describe('CreateWare2storeComponent', () => {
  let component: CreateWare2storeComponent;
  let fixture: ComponentFixture<CreateWare2storeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWare2storeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWare2storeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
