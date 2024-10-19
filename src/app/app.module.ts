import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './conponents/home/home.component';
import { HeaderComponent } from './conponents/header/header.component';
import { MenuLeftComponent } from './conponents/menu-left/menu-left.component';
import { EmpresasComponent } from './conponents/empresas/empresas.component';
import { ArticulosComponent } from './conponents/articulos/articulos.component';
import { ColaboradoresComponent } from './conponents/colaboradores/colaboradores.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaArticulosComponent } from './conponents/articulos/lista-articulos/lista-articulos.component';
import { FooterComponent } from './conponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuLeftComponent,
    EmpresasComponent,
    ArticulosComponent,
    ColaboradoresComponent,
    ListaArticulosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
