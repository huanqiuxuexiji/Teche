import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListFooterComponent } from './project-list-footer.component';

describe('ProjectListFooterComponent', () => {
  let component: ProjectListFooterComponent;
  let fixture: ComponentFixture<ProjectListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
