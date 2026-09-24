import {NgModule} from '@angular/core';
import {FindOuvrierComponent} from "../../../component/find-ouvrier/find-ouvrier.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {FindOuvrierRoutingModule} from "./find-ouvrier-routing.module";


@NgModule({
  declarations: [],
  imports: [
    FindOuvrierComponent,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FindOuvrierRoutingModule,
    NgxPaginationModule
  ]
})
export class FindOuvrierModule { }
