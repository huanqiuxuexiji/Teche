import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonsModule } from '../commons/commons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProjectListRoutingModule } from './project-list-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListHeaderComponent } from './project-list/project-list-header/project-list-header.component';
import { ProjectListBodyComponent } from './project-list/project-list-body/project-list-body.component';
import { ProjectListFooterComponent } from './project-list/project-list-footer/project-list-footer.component';
import { SelectComponent } from './project-list/project-list-body/select/select.component';
import { ContentListComponent } from './project-list/project-list-body/content-list/content-list.component';
import { ToolBarComponent } from './project-list/project-list-body/content-list/tool-bar/tool-bar.component';
import { ListComponent } from './project-list/project-list-body/content-list/list/list.component';
import { ProjectModelComponent } from './project-list/project-list-body/content-list/list/project-model/project-model.component';
import { ProjectPageComponent } from './project-list/project-list-body/content-list/list/project-page/project-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        CommonsModule,
        ProjectListRoutingModule
    ],
    declarations: [
        ProjectListComponent,
        ProjectListHeaderComponent,
        ProjectListBodyComponent,
        ProjectListFooterComponent,
        SelectComponent,
        ContentListComponent,
        ToolBarComponent,
        ListComponent,
        ProjectModelComponent,
        ProjectPageComponent],
    providers: []
})
export class ProjectListModule { }
