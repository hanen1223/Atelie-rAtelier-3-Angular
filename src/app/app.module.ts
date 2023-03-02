import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductsComponent } from './detail-products/detail-products.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    OffresEmploiComponent,
    NotFoundComponent,
    DetailProductsComponent,
    ArticlesComponent,
    AddProductsComponent,
    TemplateDrivenFormComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
