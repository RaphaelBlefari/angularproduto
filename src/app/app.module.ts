import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProdutosComponent } from './admin/produtos/produtos/produtos.component';
import { AdminComponent } from './admin/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
