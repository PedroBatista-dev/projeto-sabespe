import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SuperCentroComponent } from './pages/super-centro/super-centro.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PerfilCentroComponent } from './pages/perfil-centro/perfil-centro.component';
import { VoceSabiaComponent } from './pages/voce-sabia/voce-sabia.component';
import { VoceSabia25MarcoComponent } from './pages/voce-sabia-25-marco/voce-sabia-25-marco.component';
import { VoceSabiaAllianzComponent } from './pages/voce-sabia-allianz/voce-sabia-allianz.component';
import { VoceSabiaCatedralComponent } from './pages/voce-sabia-catedral/voce-sabia-catedral.component';
import { VoceSabiaGrafiteComponent } from './pages/voce-sabia-grafite/voce-sabia-grafite.component';
import { VoceSabiaIbirapueraComponent } from './pages/voce-sabia-ibirapuera/voce-sabia-ibirapuera.component';
import { VoceSabiaIndustrialComponent } from './pages/voce-sabia-industrial/voce-sabia-industrial.component';
import { VoceSabiaMercadaoComponent } from './pages/voce-sabia-mercadao/voce-sabia-mercadao.component';
import { VoceSabiaMoocaComponent } from './pages/voce-sabia-mooca/voce-sabia-mooca.component';
import { VoceSabiaMuseuComponent } from './pages/voce-sabia-museu/voce-sabia-museu.component';
import { VoceSabiaOrigemComponent } from './pages/voce-sabia-origem/voce-sabia-origem.component';
import { VoceSabiaParquinhoComponent } from './pages/voce-sabia-parquinho/voce-sabia-parquinho.component';
import { VoceSabiaPaulistaComponent } from './pages/voce-sabia-paulista/voce-sabia-paulista.component';
import { VoceSabiaVilaComponent } from './pages/voce-sabia-vila/voce-sabia-vila.component';
import { PerfilPoloJardinsComponent } from './pages/perfil-polo-jardins/perfil-polo-jardins.component';
import { PerfilPoloIpirangaComponent } from './pages/perfil-polo-ipiranga/perfil-polo-ipiranga.component';
import { PerfilPoloMoocaComponent } from './pages/perfil-polo-mooca/perfil-polo-mooca.component';
import { PerfilPoloMateusComponent } from './pages/perfil-polo-mateus/perfil-polo-mateus.component';
import { PerfilPoloTamanduateiComponent } from './pages/perfil-polo-tamanduatei/perfil-polo-tamanduatei.component';
import { IndicadoresContratuaisComponent } from './pages/indicadores-contraturais/indicadores-contraturais.component';
import { IndicadoresProcessoComponent } from './pages/indicadores-processo/indicadores-processo.component';
import { MetasSPComponent } from './pages/metas-sp/metas-sp.component';
import { CapaSPComponent } from './pages/capa-sp/capa-sp.component';
import { CapaSAComponent } from './pages/capa-sa/capa-sa.component';
import { CapaMauaComponent } from './pages/capa-maua/capa-maua.component';
import { MetasSAComponent } from './pages/metas-sa/metas-sa.component';
import { MetasMauaComponent } from './pages/metas-maua/metas-maua.component';
import { ProcessoTCFLComponent } from './pages/processo-tcfl/processo-tcfl.component';
import { ProcessoNLEComponent } from './pages/processo-nle/processo-nle.component';
import { ProcessoNLAComponent } from './pages/processo-nla/processo-nla.component';
import { ProcessoIPRPComponent } from './pages/processo-iprp/processo-iprp.component';
import { ProcessoISCComponent } from './pages/processo-isc/processo-isc.component';
import { TelaBotoesComponent } from './pages/tela-botoes/tela-botoes.component';
import { MapaEstrategicoComponent } from './pages/mapa-estrategico/mapa-estrategico.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'super-centro', component: SuperCentroComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'perfil-centro', component: PerfilCentroComponent },
  { path: 'perfil-polo-jardins', component: PerfilPoloJardinsComponent },
  { path: 'perfil-polo-ipiranga', component: PerfilPoloIpirangaComponent },
  { path: 'perfil-polo-mooca', component: PerfilPoloMoocaComponent },
  { path: 'perfil-polo-mateus', component: PerfilPoloMateusComponent },
  { path: 'perfil-polo-tamanduatei', component: PerfilPoloTamanduateiComponent },
  { path: 'voce-sabia', component: VoceSabiaComponent },
  { path: 'voce-sabia-25-marco', component: VoceSabia25MarcoComponent },
  { path: 'voce-sabia-allianz', component: VoceSabiaAllianzComponent },
  { path: 'voce-sabia-catedral', component: VoceSabiaCatedralComponent },
  { path: 'voce-sabia-grafite', component: VoceSabiaGrafiteComponent },
  { path: 'voce-sabia-ibirapuera', component: VoceSabiaIbirapueraComponent },
  { path: 'voce-sabia-industrial', component: VoceSabiaIndustrialComponent },
  { path: 'voce-sabia-mercadao', component: VoceSabiaMercadaoComponent },
  { path: 'voce-sabia-mooca', component: VoceSabiaMoocaComponent },
  { path: 'voce-sabia-museu', component: VoceSabiaMuseuComponent },
  { path: 'voce-sabia-origem', component: VoceSabiaOrigemComponent },
  { path: 'voce-sabia-parquinho', component: VoceSabiaParquinhoComponent },
  { path: 'voce-sabia-paulista', component: VoceSabiaPaulistaComponent },
  { path: 'voce-sabia-vila', component: VoceSabiaVilaComponent },
  { path: 'indicadores-contratuais', component: IndicadoresContratuaisComponent },
  { path: 'indicadores-processo', component: IndicadoresProcessoComponent },
  { path: 'capa-sp', component: CapaSPComponent },
  { path: 'capa-sa', component: CapaSAComponent },
  { path: 'capa-maua', component: CapaMauaComponent },
  { path: 'metas-sp', component: MetasSPComponent },
  { path: 'metas-sa', component: MetasSAComponent },
  { path: 'metas-maua', component: MetasMauaComponent },
  { path: 'processo-tcfl', component: ProcessoTCFLComponent },
  { path: 'processo-nle', component: ProcessoNLEComponent },
  { path: 'processo-nla', component: ProcessoNLAComponent },
  { path: 'processo-iprp', component: ProcessoIPRPComponent },
  { path: 'processo-isc', component: ProcessoISCComponent },
  { path: 'tela-botoes', component: TelaBotoesComponent },
  { path: 'mapa-estrategico', component: MapaEstrategicoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
