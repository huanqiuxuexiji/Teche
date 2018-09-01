import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProjectFooterComponent } from './person-project-footer.component';

describe('PersonProjectFooterComponent', () => {
  let component: PersonProjectFooterComponent;
  let fixture: ComponentFixture<PersonProjectFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonProjectFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProjectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
