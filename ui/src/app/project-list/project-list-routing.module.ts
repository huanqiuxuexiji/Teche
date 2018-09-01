import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';

const projectListRoutes: Routes = [
    {
        path: 'project-list',
        component: ProjectListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectListRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProjectListRoutingModule { }
