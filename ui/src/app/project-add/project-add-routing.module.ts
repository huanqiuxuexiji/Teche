import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectAddComponent } from './project-add/project-add.component';

const projectAddRoutes: Routes = [
    {
        path: 'project-add',
        component: ProjectAddComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectAddRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProjectAddRoutingModule { }
