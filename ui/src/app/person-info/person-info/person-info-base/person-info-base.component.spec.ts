import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoBaseComponent } from './person-info-base.component';

describe('PersonInfoBaseComponent', () => {
  let component: PersonInfoBaseComponent;
  let fixture: ComponentFixture<PersonInfoBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
