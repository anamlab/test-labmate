import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabEquipmentProductDetailComponent } from './lab-equipment-product-detail/lab-equipment-product-detail.component';
import { LabEquipmentSubcatProductComponent } from './lab-equipment-subcat-product/lab-equipment-subcat-product.component';

const routes: Routes = [
  {path: 'product-details/:title',component:LabEquipmentProductDetailComponent},
  {path: 'product-details/sub-category-product/:title/:subcategory',component:LabEquipmentSubcatProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabEquipmentsRoutingModule { }
