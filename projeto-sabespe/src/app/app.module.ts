import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { PerfilPoloJardinsComponent } from './pages/perfil-polo-jardins/perfil-polo-jardins.component';
import { PerfilPoloIpirangaComponent } from './pages/perfil-polo-ipiranga/perfil-polo-ipiranga.component';
import { PerfilPoloMoocaComponent } from './pages/perfil-polo-mooca/perfil-polo-mooca.component';
import { PerfilPoloMateusComponent } from './pages/perfil-polo-mateus/perfil-polo-mateus.component';
import { PerfilPoloTamanduateiComponent } from './pages/perfil-polo-tamanduatei/perfil-polo-tamanduatei.component';
import { IndicadoresContratuaisComponent } from './pages/indicadores-contraturais/indicadores-contraturais.component';
import { IndicadoresProcessoComponent } from './pages/indicadores-processo/indicadores-processo.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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
import { MetasSP2Component } from './pages/metas-sp-2/metas-sp-2.component';
import { MetasSP3Component } from './pages/metas-sp-3/metas-sp-3.component';
import { MetasSA2Component } from './pages/metas-sa-2/metas-sa-2.component';
import { MetasSA3Component } from './pages/metas-sa-3/metas-sa-3.component';
import { MetasMaua2Component } from './pages/metas-maua-2/metas-maua-2.component';
import { MetasMaua3Component } from './pages/metas-maua-3/metas-maua-3.component';
import { ProcessoIANCComponent } from './pages/processo-ianc/processo-ianc.component';
import { ProcessoVPComponent } from './pages/processo-vp/processo-vp.component';
import { ProcessoCMCComponent } from './pages/processo-cmc/processo-cmc.component';
import { ProcessoIECComponent } from './pages/processo-iec/processo-iec.component';
import { ProcessoIPDTComponent } from './pages/processo-ipdt/processo-ipdt.component';
import { ProcessoTCIComponent } from './pages/processo-tci/processo-tci.component';
import { ProcessoTCAComponent } from './pages/processo-tca/processo-tca.component';
import { ProcessoTCDComponent } from './pages/processo-tcd/processo-tcd.component';
import { ProcessoASAComponent } from './pages/processo-asa/processo-asa.component';
import { ProcessoASEComponent } from './pages/processo-ase/processo-ase.component';
import { ProcessoINComponent } from './pages/processo-in/processo-in.component';
import { ProcessoIVVComponent } from './pages/processo-ivv/processo-ivv.component';
import { ProcessoIACTComponent } from './pages/processo-iact/processo-iact.component';
import { ProcessoIRFAComponent } from './pages/processo-irfa/processo-irfa.component';
import { ProcessoIDGComponent } from './pages/processo-idg/processo-idg.component';
import { ProcessoIEPComponent } from './pages/processo-iep/processo-iep.component';
import { ProcessoIEAMComponent } from './pages/processo-ieam/processo-ieam.component';
import { ProcessoNPSComponent } from './pages/processo-nps/processo-nps.component';
import { ProcessoTOUVComponent } from './pages/processo-touv/processo-touv.component';
import { ProcessoTCDBOComponent } from './pages/processo-tcdbo/processo-tcdbo.component';
import { ProcessoTRRComponent } from './pages/processo-trr/processo-trr.component';
import { ProcessoIORCComponent } from './pages/processo-iorc/processo-iorc.component';
import { ProcessoIORDComponent } from './pages/processo-iord/processo-iord.component';
import { ProcessoIGQComponent } from './pages/processo-igq/processo-igq.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SuperCentroComponent,
    MapaComponent,
    MenuComponent,
    PerfilCentroComponent,
    PerfilPoloJardinsComponent,
    PerfilPoloIpirangaComponent,
    PerfilPoloMoocaComponent,
    PerfilPoloMateusComponent,
    PerfilPoloTamanduateiComponent,
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
    IndicadoresContratuaisComponent,
    IndicadoresProcessoComponent,    
    CapaSPComponent,
    CapaSAComponent,
    CapaMauaComponent,
    MetasSPComponent,
    MetasSP2Component,
    MetasSP3Component,
    MetasSAComponent,
    MetasSA2Component,
    MetasSA3Component,
    MetasMauaComponent,
    MetasMaua2Component,
    MetasMaua3Component,
    ProcessoTCFLComponent,
    ProcessoNLEComponent,
    ProcessoNLAComponent,
    ProcessoIPRPComponent,
    ProcessoISCComponent,
    ProcessoIANCComponent,
    ProcessoVPComponent,
    ProcessoCMCComponent,
    ProcessoIECComponent,
    ProcessoIPDTComponent,
    ProcessoTCIComponent,
    ProcessoTCAComponent,
    ProcessoTCDComponent,
    ProcessoASAComponent,
    ProcessoASEComponent,
    ProcessoINComponent,
    ProcessoIVVComponent,
    ProcessoIACTComponent,
    ProcessoIRFAComponent,
    ProcessoIDGComponent,
    ProcessoIEPComponent,
    ProcessoIEAMComponent,
    ProcessoNPSComponent,
    ProcessoTOUVComponent,
    ProcessoTCDBOComponent,
    ProcessoTRRComponent,
    ProcessoIORCComponent,
    ProcessoIORDComponent,
    ProcessoIGQComponent,
    TelaBotoesComponent,
    MapaEstrategicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
