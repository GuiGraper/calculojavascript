// TABELA INICIAL

var TABELA = [[1,3,3,4],            // TABELA 1
              [5,6,7,8],            // TABELA 2
              [9,10,11,12],            // TABELA 3
              [13,14,15,16]]            // TABELA 4
              
var total = 0; var soma = 0; var produto = 1; var primlinha = 1

 for(var i = 0; i < TABELA.length; i++) {
    for(var j = 0; j < TABELA.length; j++) {   
    total += TABELA[i][j];      
    }
 }
 for(var i = 0; i < TABELA.length; i++) {
    produto *= TABELA[i][i]
 }

for(var i = 0; i < TABELA.length; i++) {
   soma += TABELA[i][0]
}
for(var j = 0; j < TABELA.length; j++) {
   primlinha *= TABELA[0][j]
}


// RETORNO DOS RESULTAODS
console.log('1- 0 total da soma na primeira coluina é de:',soma)

console.log('2- O produto da primeira linha é de:',primlinha)

console.log('3- O valor total dos elementos é de',total)

console.log('4- O valor do produto da diagonal principal é de:',produto)