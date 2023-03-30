import { Component } from '@angular/core';
import bigDecimal from 'js-big-decimal';

@Component({
  selector: 'app-pagina-calculadora2',
  templateUrl: './pagina-calculadora2.component.html',
  styleUrls: ['./pagina-calculadora2.component.less']
})
export class PaginaCalculadora2Component {

  numeroTela: string[] = [];
  telaLinha1: string = "";
  telaLinha2: string = "";
  parcial: string[] = [""];
  parcialTemp: string[] = [""];
  flagDecimal: boolean = false;
  flagOperacao: boolean = false;
  flagdivisao: boolean = false;
  flagColocarNaTela: boolean = false;
  resultado: bigDecimal = new bigDecimal(0);
  numero1: bigDecimal = new bigDecimal(0);
  numero2: bigDecimal = new bigDecimal(0);
  

  montarTela(numero: string) {
    this.numeroTela.push(numero);
    this.validarDigitacao();
    this.apresentarNaTela();
    this.montarExpressao();
    this.efetuarCalculo();
  }

  validarDigitacao(){
    for(var i = 0; i < this.numeroTela.length; i++) {
      if(this.numeroTela[i] == "."){
        if(!this.flagDecimal){
          this.flagDecimal = true;
        } else {
          this.flagColocarNaTela = false;
          i = this.numeroTela.length;
        }
      }

      //Se o valor digitado for um símbolo
      if(isNaN(Number(this.numeroTela[i]))){
        //Se o símbolo for +, * ou /
        if(this.numeroTela[i] != "." && this.numeroTela[i] != "-") {
          //Não pode ser digitado na primeira posição
          if(i < 1){  
            //---------------------numero = "";
          } else {
            //Se já existe algo na primeira posição que não é numérico, não pode ser digitado
            if(i == 1 && isNaN(Number(this.numeroTela[0]))) {
                //---------------------numero = "";
            }
          }
        } else { //Se foi digitado ponto decimal ou -
          //se é a primeira posição e foi digitado o símbolo -, resetar flag de decimal
          if(i == 0 && this.numeroTela[i] == "-"){
            this.flagDecimal = false;
          }
        }
  
        //---------------------if(numero != ""){
          if(this.numeroTela[i] != "."){
            console.log("-------inicio " + this.numeroTela[i])
            if(isNaN(Number(this.numeroTela[i - 1]))){
              console.log("nao numerico " + this.numeroTela[i])
              if(this.numeroTela[i - 1] != "."){
                console.log("operador " + this.numeroTela[i])
                this.numeroTela.pop();
              } else{
                if(!isNaN(Number(this.numeroTela[this.numeroTela.length - 2]))){
                  this.numeroTela.pop();
                  this.flagDecimal = false;
                } else {
                 //--------------------- numero = "";
                }
              }
            } else {
              this.flagDecimal = false;
            } 
          }
        //---------------------}
      }

    }




    /*---------------------switch(numero){
      case ".":
        if(!this.flagDecimal){
          this.flagDecimal = true;
        } else {
          numero = "";
        }
        break;

      case "-":
        if(!this.flagOperacao){
          this.flagOperacao = true;
        } else {
          numero = "";
        }
        break;
      
      case "+":
        if(this.numeroTela.length < 1){
          numero = "";
        }

        if(!this.flagOperacao){
          this.flagOperacao = true;
        } else {
          numero = "";
        }
        break;
      
      case "*":
        if(this.numeroTela.length < 1){
          numero = "";
        }

        if(!this.flagOperacao){
          this.flagOperacao = true;
        } else {
          numero = "";
        }
        break;
      
      case "/":
        if(this.numeroTela.length < 1){
          numero = "";
        }

        if(!this.flagOperacao){
          this.flagOperacao = true;
        } else {
          numero = "";
        }
        break;

      case "0":
        if(this.flagdivisao){
          numero = "";
        }
        break;

      default:
    }




    if(numero == "."){
      if(!this.flagDecimal){
        this.flagDecimal = true;
      } else {
        numero = "";
      }
    }
    
    //Se o valor digitado for um símbolo
    if(isNaN(Number(numero))){
      //Se o símbolo for +, * ou /
      if(numero != "." && numero != "-") {
        //Não pode ser digitado na primeira posição
        if(this.numeroTela.length < 1){  
          numero = "";
        } else {
          //Se já existe algo na primeira posição que não é numérico, não pode ser digitado
          if(this.numeroTela.length == 1 && isNaN(Number(this.numeroTela[0]))) {
              numero = "";
          }
        }
      } else { //Se foi digitado ponto decimal ou -
        //se é a primeira posição e foi digitado o símbolo -, resetar flag de decimal
        if(this.numeroTela.length <= 1 && numero == "-"){
          this.flagDecimal = false;
        }
      }

      if(numero != ""){
        if(numero != "."){
          if(isNaN(Number(this.numeroTela[this.numeroTela.length - 1]))){
            if(this.numeroTela[this.numeroTela.length - 1] != "."){
              this.numeroTela.pop();
            } else{
              if(!isNaN(Number(this.numeroTela[this.numeroTela.length - 2]))){
                this.numeroTela.pop();
                this.flagDecimal = false;
              } else {
                numero = "";
              }
            }
          } else {
            this.flagDecimal = false;
          } 
        }
      }
    }

    if(isNaN(Number(numero)) && numero != "." && this.flagdivisaoPorZero){
      numero = "";      
    }

    if(numero != ""){
      
      this.numeroTela.push(numero);
      this.apresentarNaTela();
      this.montarExpressao();
      if(!isNaN(Number(numero))){
        if(Number(numero) == 0 && (this.numeroTela[this.numeroTela.length - 2] == "/" || this.flagdivisaoPorZero)){
          this.flagdivisaoPorZero = true;
          this.telaLinha2 = "Impossível dividir por zero";
        } else {
          this.flagdivisaoPorZero = false;
          this.efetuarCalculo();
        }
      }
    }*/
  }

  apresentarNaTela(){
    this.telaLinha1 = "";
    this.numeroTela.forEach(numero => {
      return this.telaLinha1 = this.telaLinha1 + numero;
    });
  }

  montarExpressao(){
    var numero: string = "";
    var k = 0;
    this.parcialTemp = [];
    for(var i = 0; i < this.numeroTela.length; i++) {
      if(isNaN(Number(this.numeroTela[i])) && this.numeroTela[i] != "." && this.numeroTela.length > 1){
        this.parcialTemp.push(numero);
        this.parcialTemp.push(this.numeroTela[i]);
        numero = "";
      } else {
          numero = numero + this.numeroTela[i];
      }
    }
    if(numero != ""){
      this.parcialTemp.push(numero);
    }
  }

  apagarNumeroNaTela(){
    if(this.numeroTela.pop() == "."){
      this.flagDecimal = false;
    };
    this.apresentarNaTela();
    this.montarExpressao();
  }

  efetuarCalculo() {
    this.parcial = this.parcialTemp.map((x) => x); 
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
            this.numero1.setValue(Number(this.parcial[i - 1]));
            this.numero2.setValue(Number(this.parcial[i + 1]));
            this.resultado = this.numero1.multiply(this.numero2);
            this.parcial[i - 1] = this.resultado.getValue();
            this.parcial[i] = "#";
            this.parcial[i + 1] = "#";
            this.limparParcial();
            i-=2;
            break;
          case "/":
            if(Number(this.parcial[i + 1]) != 0 && i < this.parcial.length - 1) {
              this.numero1.setValue(Number(this.parcial[i - 1]));
              this.numero2.setValue(Number(this.parcial[i + 1]));
              this.resultado = this.numero1.divide(this.numero2, 16);
              this.parcial[i - 1] = String(Number(this.parcial[i - 1]) / Number(this.parcial[i + 1]));
              this.parcial[i] = "#";
              this.parcial[i + 1] = "#";
              this.limparParcial();
              i-=2;
            } else {
              alert("Impossível dividir por zero");
              this.parcial[i + 1] = "1";
              i--;
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
    this.numeroTela = [];
    this.telaLinha1 = "";
    this.telaLinha2 = "";
    this.parcial = [];
    this.parcialTemp = [];
    this.flagDecimal = false;
  }
}
