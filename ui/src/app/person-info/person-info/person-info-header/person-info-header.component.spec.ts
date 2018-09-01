import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoHeaderComponent } from './person-info-header.component';

describe('PersonInfoHeaderComponent', () => {
  let component: PersonInfoHeaderComponent;
  let fixture: ComponentFixture<PersonInfoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
