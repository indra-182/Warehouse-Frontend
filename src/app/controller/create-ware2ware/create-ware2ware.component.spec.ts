import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWare2wareComponent } from './create-ware2ware.component';

describe('CreateWare2wareComponent', () => {
  let component: CreateWare2wareComponent;
  let fixture: ComponentFixture<CreateWare2wareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWare2wareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWare2wareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
