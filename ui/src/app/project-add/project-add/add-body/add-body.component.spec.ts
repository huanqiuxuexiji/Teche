import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBodyComponent } from './add-body.component';

describe('AddBodyComponent', () => {
  let component: AddBodyComponent;
  let fixture: ComponentFixture<AddBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
