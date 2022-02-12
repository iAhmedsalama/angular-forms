import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TempFormComponent } from './temp-form/temp-form.component';

const routes: Routes = [
  {path:"Product", component:ProductComponent},
  {path:"Products", component:ProductListComponent},
  {path:"user", component:TempFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
