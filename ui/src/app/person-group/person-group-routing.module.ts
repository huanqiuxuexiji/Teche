import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonGroupComponent } from './person-group/person-group.component';

const personGroupRoutes: Routes = [
    {
        path: 'person-group',
        component: PersonGroupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(personGroupRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PersonGroupRoutingModule { }
