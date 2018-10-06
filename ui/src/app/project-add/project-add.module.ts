import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonsModule } from '../commons/commons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectAddRoutingModule } from './project-add-routing.module';
import { ProjectAddComponent } from './project-add/project-add.component';
import { AddHeaderComponent } from './project-add/add-header/add-header.component';
import { AddBodyComponent } from './project-add/add-body/add-body.component';
import { AddFooterComponent } from './project-add/add-footer/add-footer.component';
import { AddBodyInfoComponent } from './project-add/add-body/add-body-info/add-body-info.component';
import { AddBodyCommentComponent } from './project-add/add-body/add-body-comment/add-body-comment.component';
import { InfoHeaderComponent } from './project-add/add-body/add-body-info/info-header/info-header.component';
import { AddContentComponent } from './project-add/add-body/add-body-info/add-content/add-content.component';
import { StepComponent } from './project-add/add-body/add-body-info/add-content/step/step.component';
import { FileComponent } from './project-add/add-body/add-body-info/add-content/file/file.component';
import { SourceComponent } from './project-add/add-body/add-body-info/add-content/file/source/source.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CommonsModule,
        NgZorroAntdModule,
        ProjectAddRoutingModule
    ],
    declarations: [
        ProjectAddComponent,
        AddHeaderComponent,
        AddBodyComponent,
        AddFooterComponent,
        AddBodyInfoComponent,
        AddBodyCommentComponent,
        InfoHeaderComponent,
        AddContentComponent,
        StepComponent,
        FileComponent,
        SourceComponent],
    providers: []
})
export class ProjectAddModule { }
