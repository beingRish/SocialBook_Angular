import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/dashboard/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { LeftSidebarComponent } from './modules/dashboard/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './modules/dashboard/right-sidebar/right-sidebar.component';
import { MainContentComponent } from './modules/dashboard/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
