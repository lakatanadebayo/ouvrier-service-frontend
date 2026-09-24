import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FindOuvrierComponent} from "../../../component/find-ouvrier/find-ouvrier.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: '', component: FindOuvrierComponent}
    ])
  ],
  exports: [RouterModule]
})
export class FindOuvrierRoutingModule { }
