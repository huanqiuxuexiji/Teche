import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonsModule } from '../commons/commons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectAddRoutingModule } from './project-add-routing.module';
import { ProjectAddComponent } from './project-add/project-add.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CommonsModule,
        NgZorroAntdModule,
        ProjectAddRoutingModule
    ],
    declarations: [
        ProjectAddComponent],
    providers: []
})
export class ProjectAddModule { }
