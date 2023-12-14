import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabSuppliesProductDetailsComponent } from './lab-supplies-product-details/lab-supplies-product-details.component';
import { LabSuppliesSubcatProductsComponent } from './lab-supplies-subcat-products/lab-supplies-subcat-products.component';


const routes: Routes = [
  {path: 'product-details/:title',component:LabSuppliesProductDetailsComponent},
  {path: 'product-details/sub-category-product/:title/:subcategory',component:LabSuppliesSubcatProductsComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabSuppliesRoutingModule { }
