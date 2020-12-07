import { NotFounComponent } from './navegacao/not-foun/not-foun.component';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ObservablesComponent } from './demos/observables/observables.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'observable', component: ObservablesComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: 'cadastro', component: CadastroComponent , canDeactivate: [CadastroGuard]  },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},
    { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]},

    { path: '**', component: NotFounComponent},
  
];

@NgModule({
    //enableTracing - para mostrar o detalhamento das rotas no console.(debugar a rota)
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
 // canLoad - não baixa o modulo da rota
 //canActivate - baixa o modulo mais não da aceeso 
 // canDeactivate - não permite que saia da rota

}