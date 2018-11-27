import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBodyInfoComponent } from './add-body-info.component';

describe('AddBodyInfoComponent', () => {
  let component: AddBodyInfoComponent;
  let fixture: ComponentFixture<AddBodyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBodyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBodyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
