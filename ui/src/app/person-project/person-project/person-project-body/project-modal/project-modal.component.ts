import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  @Input() project: Project;
  constructor() { }

  ngOnInit() {
  }

}
