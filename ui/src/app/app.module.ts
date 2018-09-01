import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RegisterModule } from './register/register.module';
import { ProjectListModule } from './project-list/project-list.module';
import { ProjectDetailModule } from './project-detail/project-detail.module';
import { PersonProjectModule } from './person-project/person-project.module';
import { PersonInfoModule } from './person-info/person-info.module';
import { PersonGroupModule } from './person-group/person-group.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { HelpModule } from './help/help.module';
import { ApplyGroupModule } from './apply-group/apply-group.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
    RegisterModule,
    ProjectListModule,
    ProjectDetailModule,
    PersonProjectModule,
    PersonInfoModule,
    PersonGroupModule,
    MainModule,
    LoginModule,
    HelpModule,
    ApplyGroupModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
