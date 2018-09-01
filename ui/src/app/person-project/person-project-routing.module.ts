import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonProjectComponent } from './person-project/person-project.component';

const personProjectRoutes: Routes = [
    {
        path: 'person-project',
        component: PersonProjectComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(personProjectRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PersonProjectRoutingModule { }
