import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        NgZorroAntdModule
    ],
    declarations: [
    DashboardComponent,
    FooterComponent
    ],
    exports: [
        DashboardComponent,
        FooterComponent
    ],
    providers: []
})
export class CommonsModule { }
