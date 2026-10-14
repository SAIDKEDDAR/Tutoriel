const prompt=require("prompt-sync")()
let secret=Math.floor(Math.random()*100)+1;
let nombre=0;
let essais=0;
while(nombre!==secret){
nombre=Number(prompt("devener une nombre entre 1 et 100  :  "));
essais++;
if(nombre<secret){
console.log("le nombre secret est grand ")
}
else if(nombre>secret){
console.log("le nombre secret est petit")
}
else{
console.log("le nombre est correct")
console.log("nombre d'essai = ",essais)
}
}