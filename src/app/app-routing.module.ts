import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCalculadoraComponent } from './pagina-calculadora/pagina-calculadora.component';
import { PaginaForcaComponent } from './pagina-forca/pagina-forca.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaJogoDaVelhaComponent } from './pagina-jogo-da-velha/pagina-jogo-da-velha.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaRelogioComponent } from './pagina-relogio/pagina-relogio.component';

const routes: Routes = [
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "pagina-calculadora", component: PaginaCalculadoraComponent },
  { path: "pagina-relogio", component: PaginaRelogioComponent},
  { path: "pagina-jogo-da-velha", component: PaginaJogoDaVelhaComponent},
  { path: "pagina-forca", component: PaginaForcaComponent},
  { path: "", component: PaginaInicialComponent, pathMatch: "full" },
  { path: "**", component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
