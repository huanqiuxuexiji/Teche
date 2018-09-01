import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoCertComponent } from './person-info-cert.component';

describe('PersonInfoCertComponent', () => {
  let component: PersonInfoCertComponent;
  let fixture: ComponentFixture<PersonInfoCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
