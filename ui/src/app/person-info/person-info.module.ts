import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonsModule } from '../commons/commons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { PersonInfoRoutingModule } from './person-info-routing.module';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonInfoBaseComponent } from './person-info/person-info-base/person-info-base.component';
import { PersonInfoCertComponent } from './person-info/person-info-cert/person-info-cert.component';
import { PersonInfoCommonComponent } from './person-info/person-info-common/person-info-common.component';
import { PersonInfoHeaderComponent } from './person-info/person-info-header/person-info-header.component';
import { PersonInfoFooterComponent } from './person-info/person-info-footer/person-info-footer.component';

@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonsModule,
        CommonModule,
        FormsModule,
        PersonInfoRoutingModule
    ],
    declarations: [
        PersonInfoComponent,
        PersonInfoBaseComponent,
        PersonInfoCertComponent,
        PersonInfoCommonComponent,
        PersonInfoHeaderComponent,
        PersonInfoFooterComponent],
    providers: []
})
export class PersonInfoModule { }
