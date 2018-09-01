import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBodyCommentComponent } from './detail-body-comment.component';

describe('DetailBodyCommentComponent', () => {
  let component: DetailBodyCommentComponent;
  let fixture: ComponentFixture<DetailBodyCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBodyCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBodyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
