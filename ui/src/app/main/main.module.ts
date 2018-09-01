import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRoutingModule } from './main-routing.module';
import { CommonsModule } from '../commons/commons.module';
import { MainComponent } from './main/main.component';
import { MainHeaderComponent } from './main/main-header/main-header.component';
import { MainBodyComponent } from './main/main-body/main-body.component';
import { FirstComponent } from './main/main-body/first/first.component';
import { SecondComponent } from './main/main-body/second/second.component';
import { LeftComponent } from './main/main-body/second/left/left.component';
import { RightComponent } from './main/main-body/second/right/right.component';
import { MainFooterComponent } from './main/main-footer/main-footer.component';

@NgModule({
    imports: [
        CommonsModule,
        NgZorroAntdModule,
        MainRoutingModule
    ],
    declarations: [
    MainComponent,
    MainHeaderComponent,
    MainBodyComponent,
    FirstComponent,
    SecondComponent,
    LeftComponent,
    RightComponent,
    MainFooterComponent],
    providers: []
})
export class MainModule { }
