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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SuperCentroComponent,
    MapaComponent,
    MenuComponent,
    PerfilCentroComponent,
    VoceSabiaComponent,
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
