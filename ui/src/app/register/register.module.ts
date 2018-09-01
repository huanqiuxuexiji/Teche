import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterHeaderComponent } from './register/register-header/register-header.component';
import { RegisterBodyComponent } from './register/register-body/register-body.component';
import { RegisterFooterComponent } from './register/register-footer/register-footer.component';

@NgModule({
    imports: [
        RegisterRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
    RegisterComponent,
    RegisterHeaderComponent,
    RegisterBodyComponent,
    RegisterFooterComponent],
    providers: []
})
export class RegisterModule { }
