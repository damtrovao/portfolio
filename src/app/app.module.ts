import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaCalculadoraComponent } from './pagina-calculadora/pagina-calculadora.component';
import { PaginaCalculadora2Component } from './pagina-calculadora2/pagina-calculadora2.component';
import { PaginaRelogioComponent } from './pagina-relogio/pagina-relogio.component';
import { PaginaJogoDaVelhaComponent } from './pagina-jogo-da-velha/pagina-jogo-da-velha.component';
import { PaginaForcaComponent } from './pagina-forca/pagina-forca.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaNaoEncontradaComponent,
    PaginaCalculadoraComponent,
    PaginaCalculadora2Component,
    PaginaRelogioComponent,
    PaginaJogoDaVelhaComponent,
    PaginaForcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
