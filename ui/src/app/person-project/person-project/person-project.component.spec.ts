import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProjectComponent } from './person-project.component';

describe('PersonProjectComponent', () => {
  let component: PersonProjectComponent;
  let fixture: ComponentFixture<PersonProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
