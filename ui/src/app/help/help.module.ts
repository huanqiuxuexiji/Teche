import { NgModule } from '@angular/core';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help/help.component';

@NgModule({
    imports: [
        HelpRoutingModule
    ],
    declarations: [
        HelpComponent],
    providers: []
})
export class HelpModule { }
