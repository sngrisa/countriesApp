import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    ServicesModule,
    ComponentsModule,
    SharedModule,
    RouterModule,
],
  providers: [],
  bootstrap: [AppComponent]     
})
export class AppModule { }
