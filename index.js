const name = "Junior";
let xpDoHeroi = 10001;
let nivel = " ";

if (xpDoHeroi < 1000) {
    nivel = "Ferro"
}
else if(xpDoHeroi < 2001) {
    nivel = "Bronze"
}
else if (xpDoHeroi < 6001) {
    nivel = "Prata"
}
else if (xpDoHeroi < 7001 ) {
    nivel = "Ouro"
}
else if (xpDoHeroi < 8001 ) {
    nivel = "Platina"
}
else if (xpDoHeroi < 9001) {
    nivel = "Ascendente"
}
else if (xpDoHeroi < 10001) {
    nivel = "Imortal" 
}
else {
    nivel = "Radiante"
}

console.log(`O Herói de nome ${name} está no nível ${nivel}`)