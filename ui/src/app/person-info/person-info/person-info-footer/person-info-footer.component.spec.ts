import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoFooterComponent } from './person-info-footer.component';

describe('PersonInfoFooterComponent', () => {
  let component: PersonInfoFooterComponent;
  let fixture: ComponentFixture<PersonInfoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
