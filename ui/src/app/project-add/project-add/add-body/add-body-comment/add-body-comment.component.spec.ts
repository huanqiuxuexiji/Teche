import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBodyCommentComponent } from './add-body-comment.component';

describe('AddBodyCommentComponent', () => {
  let component: AddBodyCommentComponent;
  let fixture: ComponentFixture<AddBodyCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBodyCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBodyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
