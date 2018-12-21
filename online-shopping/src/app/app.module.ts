import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import cartComponent from './cart.component';
import productComponent from './product.component';
import { QuantityPipe } from './quantity.pipe';
import { ProductService } from './product.service';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    cartComponent,
    productComponent,
    QuantityPipe,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[ProductService,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
