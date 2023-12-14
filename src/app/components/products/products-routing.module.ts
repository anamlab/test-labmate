import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabEquipmentsComponent } from './lab-equipments/lab-equipments.component';
import { LabSuppliesComponent } from './lab-supplies/lab-supplies.component';
import { ProductCompareComponent } from './product-compare/product-compare.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CatalogPreviewComponent } from './catalog-preview/catalog-preview.component';

const routes: Routes = [
  { path: 'lab-equipments', component: LabEquipmentsComponent },
  { path: 'lab-supplies', component: LabSuppliesComponent },
  { path: 'compare-products', component: ProductCompareComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'catalog-preview/:title', component: CatalogPreviewComponent },
  { path: 'lab-equipments', loadChildren: () => import('./lab-equipments/lab-equipments.module').then(mod => mod.LabEquipmentsModule) },
  { path: 'lab-supplies', loadChildren: () => import('./lab-supplies/lab-supplies.module').then(mod => mod.LabSuppliesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
