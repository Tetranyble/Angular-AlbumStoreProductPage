import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes} from '@angular/router'

import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Z_FULL_FLUSH } from 'zlib';

It will be helpful to set a default route by adding a third object to the appRoutes array
with the key path set to the value '',
the key redirectTo set to the value products, and the pathMatch key set to the value full
const appRoutes: Routes = [
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "product/:id",
    component: ProductPageComponent
  },
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
