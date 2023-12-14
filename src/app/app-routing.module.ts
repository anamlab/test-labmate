import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareerComponent } from './components/career/career.component';
import { AskExpertComponent } from './components/ask-expert/ask-expert.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'all-products', component: AllProductsComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'career', component: CareerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ask-expert', component: AskExpertComponent},
  { path: 'catalogs', component: CatalogsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'products',loadChildren: () => import('./components/products/products.module').then(mod=>mod.ProductsModule), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
