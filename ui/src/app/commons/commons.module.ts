import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        NgZorroAntdModule,
        AppRoutingModule
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
