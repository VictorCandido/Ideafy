import { IdeiaService } from './pages/ideias/ideia.service';
import { IdeiasModule } from './pages/ideias/ideias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeModule } from './pages/home/home.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    IdeiasModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [ IdeiaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
