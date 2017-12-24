import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CarouselComponent } from "./components/carousel/carousel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { SearchComponent } from "./components/search/search.component";
import { StarsComponent } from "./components/stars/stars.component";
import { AppComponent } from './components/application/app.component';


import { ProductService } from "./services/product.service";

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
