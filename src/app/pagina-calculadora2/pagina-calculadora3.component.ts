import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-calculadora2',
  templateUrl: './pagina-calculadora2.component.html',
  styleUrls: ['./pagina-calculadora2.component.less']
})
export class PaginaCalculadora2Component {

  numeroTela: string[] = [];
  telaLinha1: string = "";
  telaLinha2: string = "";
  numero: string = "";
  expressao: string[] = [""];
  parcial: string[] = [""];
  parcialTemp: string[] = [""];
  indiceExpressao: number = 0;
  

  montarTela(numero: string) {
    this.expressao[this.indiceExpressao] = this.expressao[this.indiceExpressao] + numero;
    if(this.indiceExpressao > 0){
      this.efetuarCalculo();
    }
    this.numeroTela.push(numero);
    this.apresentarNaTela();
  }

  apagarNumeroNaTela(){
    this.numeroTela.pop();
    if((this.expressao[this.indiceExpressao].length == 0 && this.indiceExpressao > 0)){
      this.expressao.pop();
      this.indiceExpressao--;
    }
    if(this.expressao[this.indiceExpressao].length == 1) {
      if(this.indiceExpressao == 0){
        this.telaLinha2 = "";
      }
      this.expressao[this.indiceExpressao] = "";
    } else {
      this.expressao[this.indiceExpressao] = this.expressao[this.indiceExpressao].slice(0, this.expressao[this.indiceExpressao].length - 1)
      this.efetuarCalculo();
    }
    this.apresentarNaTela();
  }

  apresentarNaTela(){
    this.telaLinha1 = "";
    this.numeroTela.forEach(numero => {
      return this.telaLinha1 = this.telaLinha1 + numero;
    });
  }

  carregarOperacao(operacao: string) {
    //Caso o elemento atual não seja numérico, verificar validade do símbolo
    if(isNaN(Number(this.expressao[this.indiceExpressao])) || this.expressao[this.indiceExpressao] == "") {
      //única operação possível no primeiro elemento do cálculo é o sinal de negativo
      if(this.indiceExpressao == 0) {
        if(operacao != "-"){
          operacao = "";
        } else {
          this.expressao[this.indiceExpressao] = this.expressao[this.indiceExpressao] + operacao
        }
      } else {
        if(isNaN(Number(this.expressao[this.indiceExpressao - 1]))) {
          this.expressao[this.indiceExpressao - 1] = operacao;
          this.numeroTela.pop();
        } else {
          this.expressao[this.indiceExpressao] = operacao;
          this.indiceExpressao++;
          this.expressao[this.indiceExpressao] = "";
        } 
      }
    } else {
      this.expressao.push(operacao);
      this.indiceExpressao += 2;
      this.expressao.push("");
    }
    if(operacao != ""){
      this.numeroTela.push(operacao);
      this.apresentarNaTela();
    }
  }

  efetuarCalculo() {
    this.parcial = this.expressao.map((x) => x); 
    this.calcularMultiplicacaoEDivisao();
    this.limparParcial();
    this.calcularSomaESubtracao();
    this.limparParcial();
    this.telaLinha2 = this.parcial[0];
  }

  calcularMultiplicacaoEDivisao() {
    for(var i = 0; i < this.parcial.length; i++){
      if(isNaN(Number(this.parcial[i]))){
        switch (this.parcial[i]) {
          case "*":
            this.parcial[i - 1] = String(Number(this.parcial[i - 1]) * Number(this.parcial[i + 1]));
            this.parcial[i] = "#";
            this.parcial[i + 1] = "#";
            break;
          case "/":
            if(Number(this.parcial[i + 1]) != 0) {
              this.parcial[i - 1] = String(Number(this.parcial[i - 1]) / Number(this.parcial[i + 1]));
              this.parcial[i] = "#";
              this.parcial[i + 1] = "#";
            } else {
              alert("Impossível dividir por zero");
            }
            break;
        }
      }
    }
  }

  calcularSomaESubtracao() {
    for(var i = 0; i < this.parcial.length; i++){
      if(isNaN(Number(this.parcial[i]))){
        switch (this.parcial[i]) {
          case "+":
            this.parcial[i - 1] = String(Number(this.parcial[i - 1]) + Number(this.parcial[i + 1]));
            this.parcial[i] = "#";
            this.parcial[i + 1] = "#";
            break;
          case "-":
            this.parcial[i - 1] = String(Number(this.parcial[i - 1]) - Number(this.parcial[i + 1]));
            this.parcial[i] = "#";
            this.parcial[i + 1] = "#";
            break;
        }
        this.limparParcial();
        i=0;
      }
    }
  }

  botaoIgual()  {
    this.telaLinha1 = this.parcial[0];
    this.expressao = [""];
    this.expressao[0] = this.parcial[0];
    this.indiceExpressao = 0;
    this.telaLinha2 = "";
    this.numeroTela = [""];
    for(var i = 0; i < this.parcial[0].length; i++){
      this.numeroTela[i] = this.parcial[0][i];
    }
  }

  limparParcial(){
    this.parcial = this.parcial.filter(elemento => {
      return elemento !== "#"
    });
  }

  resetCalculadora() {
    this.numeroTela = [""];
    this.telaLinha1 = "";
    this.telaLinha2 = "";
    this.parcial = [""];
    this.expressao = [""];
    this.indiceExpressao = 0;
  }
}
