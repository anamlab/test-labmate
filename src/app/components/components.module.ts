import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlanceProductsComponent } from './glance-products/glance-products.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { AskExpertComponent } from './ask-expert/ask-expert.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    GlanceProductsComponent,
    FooterComponent,
    HeaderComponent,
    ContactUsComponent,
    CareerComponent,
    AskExpertComponent,
    CatalogsComponent,
    AllProductsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
