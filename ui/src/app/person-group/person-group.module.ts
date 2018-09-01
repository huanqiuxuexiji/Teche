import { NgModule } from '@angular/core';

import { PersonGroupRoutingModule } from './person-group-routing.module';
import { PersonGroupComponent } from './person-group/person-group.component';

@NgModule({
    imports: [
        PersonGroupRoutingModule
    ],
    declarations: [
        PersonGroupComponent],
    providers: []
})
export class PersonGroupModule { }
