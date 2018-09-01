import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommonsModule } from '../commons/commons.module';

import { PersonProjectRoutingModule } from './person-project-routing.module';
import { PersonProjectComponent } from './person-project/person-project.component';
import { PersonProjectHeaderComponent } from './person-project/person-project-header/person-project-header.component';
import { PersonProjectBodyComponent } from './person-project/person-project-body/person-project-body.component';
import { ProjectModalComponent } from './person-project/person-project-body/project-modal/project-modal.component';
import { PersonProjectFooterComponent } from './person-project/person-project-footer/person-project-footer.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CommonsModule,
        PersonProjectRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        PersonProjectComponent,
        PersonProjectHeaderComponent,
        PersonProjectBodyComponent,
        ProjectModalComponent,
        PersonProjectFooterComponent 

    ],
    providers: []
})
export class PersonProjectModule { }
