import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { IdeiasRoutingModule } from './ideias-routing.module';
import { CadastrarIdeiasComponent } from './cadastrar-ideias/cadastrar-ideias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastrarIdeiasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IdeiasRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCheckboxModule,
    FontAwesomeModule,
  ],
  exports: [
    CadastrarIdeiasComponent
  ]
})
export class IdeiasModule { }
