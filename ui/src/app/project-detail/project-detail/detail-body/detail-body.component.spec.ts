import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBodyComponent } from './detail-body.component';

describe('DetailBodyComponent', () => {
  let component: DetailBodyComponent;
  let fixture: ComponentFixture<DetailBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
