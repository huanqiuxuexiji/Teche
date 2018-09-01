import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProjectBodyComponent } from './person-project-body.component';

describe('PersonProjectBodyComponent', () => {
  let component: PersonProjectBodyComponent;
  let fixture: ComponentFixture<PersonProjectBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonProjectBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProjectBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
