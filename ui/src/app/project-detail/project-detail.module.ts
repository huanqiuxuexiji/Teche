import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonsModule } from '../commons/commons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DetailHeaderComponent } from './project-detail/detail-header/detail-header.component';
import { DetailBodyComponent } from './project-detail/detail-body/detail-body.component';
import { DetailFooterComponent } from './project-detail/detail-footer/detail-footer.component';
import { DetailBodyInfoComponent } from './project-detail/detail-body/detail-body-info/detail-body-info.component';
import { DetailBodyCommentComponent } from './project-detail/detail-body/detail-body-comment/detail-body-comment.component';
import { InfoHeaderComponent } from './project-detail/detail-body/detail-body-info/info-header/info-header.component';
import { DetailContentComponent } from './project-detail/detail-body/detail-body-info/detail-content/detail-content.component';
import { StepComponent } from './project-detail/detail-body/detail-body-info/detail-content/step/step.component';
import { FileComponent } from './project-detail/detail-body/detail-body-info/detail-content/file/file.component';
import { SourceComponent } from './project-detail/detail-body/detail-body-info/detail-content/file/source/source.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CommonsModule,
        NgZorroAntdModule,
        ProjectDetailRoutingModule
    ],
    declarations: [
        ProjectDetailComponent,
        DetailHeaderComponent,
        DetailBodyComponent,
        DetailFooterComponent,
        DetailBodyInfoComponent,
        DetailBodyCommentComponent,
        InfoHeaderComponent,
        DetailContentComponent,
        StepComponent,
        FileComponent,
        SourceComponent],
    providers: []
})
export class ProjectDetailModule { }
