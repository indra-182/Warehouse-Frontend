import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSup2wareComponent } from './create-sup2ware.component';

describe('CreateSup2wareComponent', () => {
  let component: CreateSup2wareComponent;
  let fixture: ComponentFixture<CreateSup2wareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSup2wareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSup2wareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
