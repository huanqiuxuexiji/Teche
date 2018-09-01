import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProjectHeaderComponent } from './person-project-header.component';

describe('PersonProjectHeaderComponent', () => {
  let component: PersonProjectHeaderComponent;
  let fixture: ComponentFixture<PersonProjectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonProjectHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
