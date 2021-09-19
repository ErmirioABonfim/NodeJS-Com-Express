
//Esportando uma função para outro arquivo JS
module.exports = function (value01, value02) { //Declarando module.exports como  uma função
     this.value01 = value01;                   //Recebendo parâmetros value01 e value02
     this.value02 = value02;                   //definido construtor 
     this.result = function () {               //Colocando no contrutor this.result como uma função
         return this.value01 +  this.value02;  //Ela é retornada para ser acessada 
     }
 }


 