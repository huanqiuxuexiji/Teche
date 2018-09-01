import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonInfoBaseComponent } from './person-info/person-info-base/person-info-base.component';
import { PersonInfoCertComponent } from './person-info/person-info-cert/person-info-cert.component';

const personInfoRoutes: Routes = [
    {
        path: 'person-info',
        component: PersonInfoComponent,
        children: [
            { path: 'base', component: PersonInfoBaseComponent },
            { path: 'cert', component: PersonInfoCertComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(personInfoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PersonInfoRoutingModule { }
