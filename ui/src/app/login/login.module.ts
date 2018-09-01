import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginBodyComponent } from './login/login-body/login-body.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { LoginFooterComponent } from './login/login-footer/login-footer.component';

@NgModule({
    imports: [
        LoginRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        LoginComponent,
        LoginBodyComponent,
        LoginHeaderComponent,
        LoginFooterComponent],
    providers: []
})
export class LoginModule { }
