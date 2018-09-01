import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplyGroupComponent } from './apply-group/apply-group.component';

const applyGroupRoutes: Routes = [
    {
        path: 'apply-group',
        component: ApplyGroupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(applyGroupRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ApplyGroupRoutingModule { }
