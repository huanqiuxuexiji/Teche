import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyGroupComponent } from './apply-group.component';

describe('ApplyGroupComponent', () => {
  let component: ApplyGroupComponent;
  let fixture: ComponentFixture<ApplyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
