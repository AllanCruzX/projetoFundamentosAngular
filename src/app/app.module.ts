import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
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
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { TodoModule } from './demos/todo-list/todo.module';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ObservablesComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
       
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 10,
      unidadeToken: 'e45464564646c45v45dc'
    }),
    TodoModule
   
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
