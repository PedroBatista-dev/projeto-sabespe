import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SuperCentroComponent } from './pages/super-centro/super-centro.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PerfilCentroComponent } from './pages/perfil-centro/perfil-centro.component';
import { VoceSabiaComponent } from './pages/voce-sabia/voce-sabia.component';
import { VoceSabia25MarcoComponent } from './pages/voce-sabia-25-marco/voce-sabia-25-marco.component';
import { VoceSabiaCatedralComponent } from './pages/voce-sabia-catedral/voce-sabia-catedral.component';
import { VoceSabiaMercadaoComponent } from './pages/voce-sabia-mercadao/voce-sabia-mercadao.component';
import { VoceSabiaMuseuComponent } from './pages/voce-sabia-museu/voce-sabia-museu.component';
import { VoceSabiaAllianzComponent } from './pages/voce-sabia-allianz/voce-sabia-allianz.component';
import { VoceSabiaIbirapueraComponent } from './pages/voce-sabia-ibirapuera/voce-sabia-ibirapuera.component';
import { VoceSabiaPaulistaComponent } from './pages/voce-sabia-paulista/voce-sabia-paulista.component';
import { VoceSabiaMoocaComponent } from './pages/voce-sabia-mooca/voce-sabia-mooca.component';
import { VoceSabiaGrafiteComponent } from './pages/voce-sabia-grafite/voce-sabia-grafite.component';
import { VoceSabiaOrigemComponent } from './pages/voce-sabia-origem/voce-sabia-origem.component';
import { VoceSabiaParquinhoComponent } from './pages/voce-sabia-parquinho/voce-sabia-parquinho.component';
import { VoceSabiaIndustrialComponent } from './pages/voce-sabia-industrial/voce-sabia-industrial.component';
import { VoceSabiaVilaComponent } from './pages/voce-sabia-vila/voce-sabia-vila.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SuperCentroComponent,
    MapaComponent,
    MenuComponent,
    PerfilCentroComponent,
    VoceSabiaComponent,
    VoceSabia25MarcoComponent,
    VoceSabiaCatedralComponent,
    VoceSabiaMercadaoComponent,
    VoceSabiaMuseuComponent,
    VoceSabiaAllianzComponent,
    VoceSabiaIbirapueraComponent,
    VoceSabiaPaulistaComponent,
    VoceSabiaMoocaComponent,
    VoceSabiaGrafiteComponent,
    VoceSabiaOrigemComponent,
    VoceSabiaParquinhoComponent,
    VoceSabiaIndustrialComponent,
    VoceSabiaVilaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
