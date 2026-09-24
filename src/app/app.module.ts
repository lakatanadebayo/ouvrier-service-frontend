import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TopMenuModule} from "./module/top-menu/top-menu.module";
import {HomeModule} from "./module/home/home.module";
import {NgxPaginationModule} from "ngx-pagination";
import {FindOuvrierModule} from "./module/home/find-ouvrier/find-ouvrier.module";

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    TopMenuModule,
    HomeModule,
    FindOuvrierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
