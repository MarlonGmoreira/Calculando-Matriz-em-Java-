
var matriz = [[1,2,3,4],
              [5,6,7,8], 
              [9,10,11,12],
              [13,14,15,16]];
console.log(matriz);
var soma = 0
for (let i = 0;i <matriz.length;i++)    {
for (let j = 0;j <matriz.length;j++)    {
console.log('[' +i+ ','+j+']= '+ matriz[i] [j]);
  soma += matriz[i][j];
}
}
   console.log (soma)
var multi=1
for(let i=0; i < matriz.length; i++) {
  multi = multi* matriz[0][i]}
console.log (multi)
var so =0
for(let i=0;i<matriz.length; i++){
  so =so+ matriz[i][0]}
console.log (so)
var diag = 0
for (let i = 0; i <matriz.length; i++){ diag =diag+ matriz [i][i]}
console.log (diag)
