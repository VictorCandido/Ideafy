import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule,  } from '@angular/material/form-field';

import { IdeiasRoutingModule } from './ideias-routing.module';
import { CadastrarIdeiasComponent } from './cadastrar-ideias/cadastrar-ideias.component';


@NgModule({
  declarations: [
    CadastrarIdeiasComponent,
  ],
  imports: [
    CommonModule,
    IdeiasRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class IdeiasModule { }
