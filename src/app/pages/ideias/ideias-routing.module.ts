import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarIdeiasComponent } from './cadastrar-ideias/cadastrar-ideias.component';


const routes: Routes = [
  { path: '', component: CadastrarIdeiasComponent },
  { path: ':id', component: CadastrarIdeiasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeiasRoutingModule { }
