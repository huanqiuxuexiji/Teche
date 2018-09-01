import { NgModule } from '@angular/core';

import { ApplyGroupRoutingModule } from './apply-group-routing.module';
import { ApplyGroupComponent } from './apply-group/apply-group.component';

@NgModule({
    imports: [
        ApplyGroupRoutingModule
    ],
    declarations: [
        ApplyGroupComponent],
    providers: []
})
export class ApplyGroupModule { }
