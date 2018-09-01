import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectDetailComponent } from './project-detail/project-detail.component';

const projectDetailRoutes: Routes = [
    {
        path: 'project-detail',
        component: ProjectDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectDetailRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProjectDetailRoutingModule { }
