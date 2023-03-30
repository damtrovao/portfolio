import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-forca',
  templateUrl: './pagina-forca.component.html',
  styleUrls: ['./pagina-forca.component.less']
})
export class PaginaForcaComponent {
  letras: string[] = [];
  letrasCertas: string[] = [];
  letra: string = "";
  erros: string[] = [];
  flagInicio: boolean = false;
  

  comecarJogo(palavra: string) {
    this.flagInicio = true;
    palavra = palavra.toUpperCase().normalize('NFD').replace(/\p{Mn}/gu, "");
    for(var i = 0; i < palavra.length; i++){
      this.letras[i] = palavra[i];
      this.letrasCertas[i] = "_";
    }
  }

  verificarLetra(letra: string){
    letra = letra.toUpperCase().normalize('NFD').replace(/\p{Mn}/gu, "");
    if(this.letras.includes(letra)){
      this.letras.forEach((letraVetor, i) => {
        if(letraVetor === letra){
          this.letrasCertas[i] = letraVetor;
        }
      });

      if(!this.letrasCertas.includes("_")){
        alert("Você Venceu!!");
      }
    } else {
      if(letra.length > 0){
        this.erros.push(letra);
        if(this.erros.length > 2){
          this.letrasCertas = this.letras;
          alert("Você perdeu!")
        }
      }
    }
    this.letra = "";
  }

  resetJogo() {
    this.flagInicio = false;
    this.letras= [];
    this.letrasCertas = [];
    this.letra = "";
    this.erros = [];

  }
}
