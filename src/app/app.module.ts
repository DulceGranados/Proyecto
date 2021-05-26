import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './pages/menu/menu.component';
import { Error4Component } from './pages/error4/error4.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    ContactoComponent,
    MenuComponent,
    Error4Component,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
