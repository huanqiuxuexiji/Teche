import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBodyInfoComponent } from './detail-body-info.component';

describe('DetailBodyInfoComponent', () => {
  let component: DetailBodyInfoComponent;
  let fixture: ComponentFixture<DetailBodyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBodyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBodyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
