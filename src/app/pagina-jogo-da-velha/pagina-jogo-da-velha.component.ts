import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-jogo-da-velha',
  templateUrl: './pagina-jogo-da-velha.component.html',
  styleUrls: ['./pagina-jogo-da-velha.component.less']
})
export class PaginaJogoDaVelhaComponent implements OnInit{

  pecaInicial = "";
  tabuleiro: String[] = ["","","","","","","","",""];
  flagVencedor: boolean = false;

  ngOnInit(){
    this.resetTabuleiro();
  }

  selecionado(campo: number) {
    if(!this.flagVencedor){
      if(this.tabuleiro[campo] == ""){
        if(this.pecaInicial == "X"){
          this.tabuleiro[campo] = "X";
          this.pecaInicial = "O";
        } else {
          this.tabuleiro[campo] = "O";
          this.pecaInicial = "X";
        }

        this.verificarVitoria();
      }
    }
  }

  verificarVitoria(){
    if(this.tabuleiro[0] != ""){
      if(this.tabuleiro[0] == this.tabuleiro[1] && this.tabuleiro[1] == this.tabuleiro[2] ||
        this.tabuleiro[0] == this.tabuleiro[3] && this.tabuleiro[3] == this.tabuleiro[6] ||
        this.tabuleiro[0] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[8]) {
          alert("O vencedor foi: " + this.tabuleiro[0]);
          this.flagVencedor = true;
        }
    }

    if(this.tabuleiro[1] != ""){
      if(this.tabuleiro[1] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[7]) {
          alert("O vencedor foi: " + this.tabuleiro[1]);
          this.flagVencedor = true;
        }
    }

    if(this.tabuleiro[2] != ""){
      if(this.tabuleiro[2] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[6] ||
        this.tabuleiro[2] == this.tabuleiro[5] && this.tabuleiro[5] == this.tabuleiro[8]) {
          alert("O vencedor foi: " + this.tabuleiro[2]);
          this.flagVencedor = true;
        }
    }

    if(this.tabuleiro[3] != ""){
      if(this.tabuleiro[3] == this.tabuleiro[4] && this.tabuleiro[4] == this.tabuleiro[5] ) {
          alert("O vencedor foi: " + this.tabuleiro[3]);
          this.flagVencedor = true;
        }
    }

    if(this.tabuleiro[6] != ""){
      if(this.tabuleiro[6] == this.tabuleiro[7] && this.tabuleiro[7] == this.tabuleiro[8] ) {
          alert("O vencedor foi: " + this.tabuleiro[6]);
          this.flagVencedor = true;
        }
    }
  }

  resetTabuleiro(){
    this.flagVencedor = false;
    this.pecaInicial = "X";
    this.tabuleiro.fill("");
  }
}
