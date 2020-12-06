import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ObservablesComponent } from './demos/observables/observables.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProdutoModule } from './demos/arquitetura-componentes/produto.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ObservablesComponent,
    CadastroComponent,
       
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    ProdutoModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
   
  ],
  providers: [
    AuthGuard,
    CadastroGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
