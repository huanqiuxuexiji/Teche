import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoCommonComponent } from './person-info-common.component';

describe('PersonInfoCommonComponent', () => {
  let component: PersonInfoCommonComponent;
  let fixture: ComponentFixture<PersonInfoCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
