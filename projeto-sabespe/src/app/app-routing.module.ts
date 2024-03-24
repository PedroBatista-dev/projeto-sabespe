import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SuperCentroComponent } from './pages/super-centro/super-centro.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PerfilCentroComponent } from './pages/perfil-centro/perfil-centro.component';
import { VoceSabiaComponent } from './pages/voce-sabia/voce-sabia.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'super-centro', component: SuperCentroComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'perfil-centro', component: PerfilCentroComponent },
  { path: 'voce-sabia', component: VoceSabiaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
