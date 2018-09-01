import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '../../../../../model/project-model';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})
export class ProjectModelComponent implements OnInit {

  @Input() project: ProjectModel;
  constructor() { }

  ngOnInit() {
  }

}
