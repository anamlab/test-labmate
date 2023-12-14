import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareerComponent } from './components/career/career.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AskExpertComponent } from './components/ask-expert/ask-expert.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { LabEquipmentsComponent } from './components/products/lab-equipments/lab-equipments.component';
import { LabSuppliesComponent } from './components/products/lab-supplies/lab-supplies.component';
import { LabEquipmentSubcatProductComponent } from './components/products/lab-equipments/lab-equipment-subcat-product/lab-equipment-subcat-product.component';
import { LabEquipmentProductDetailComponent } from './components/products/lab-equipments/lab-equipment-product-detail/lab-equipment-product-detail.component';
import { ProductCompareComponent } from './components/products/product-compare/product-compare.component';
import { LabSuppliesProductDetailsComponent } from './components/products/lab-supplies/lab-supplies-product-details/lab-supplies-product-details.component';
import { LabSuppliesSubcatProductsComponent } from './components/products/lab-supplies/lab-supplies-subcat-products/lab-supplies-subcat-products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CatalogPreviewComponent } from './components/products/catalog-preview/catalog-preview.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllProductsComponent,
    NavbarComponent,
    MenubarComponent,
    AboutUsComponent,
    FooterComponent,
    ProductsComponent,
    ContactUsComponent,
    CareerComponent,
    HomeComponent,
    AskExpertComponent,
    CatalogsComponent,
    LabEquipmentsComponent,
    LabSuppliesComponent,
    LabEquipmentProductDetailComponent,
    LabEquipmentSubcatProductComponent,
    ProductCompareComponent,
    LabSuppliesProductDetailsComponent,
    LabSuppliesSubcatProductsComponent,
    ProductDetailsComponent,
    CatalogPreviewComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
