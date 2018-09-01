import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListBodyComponent } from './project-list-body.component';

describe('ProjectListBodyComponent', () => {
  let component: ProjectListBodyComponent;
  let fixture: ComponentFixture<ProjectListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
