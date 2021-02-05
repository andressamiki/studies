/*iteraveis
- arrays
- strings
- maps
- sets*/


// Iteração com o laço for...of
let numeros = [1,3,4];
for (var iterator of numeros) {
    console.log(iterator)
}

// Diferenças entre  o for...of e for...in
let perfilDoFacebook = {
    nome: 'Andressa',
    idade: 25
}

for (var key in perfilDoFacebook) {
    let info = perfilDoFacebook[key];
    console.log(info);
}

// Break e continue 
for (var iterator of numeros) {
    if(iterator > 2){
        break;
    }
}

for (var iterator of numeros) {
    if(iterator === 3){
        continue;
    }
}

//Estruturas de map e weakmap
let mapa = new Map();
mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('tres', 3);

for (var chave of mapa.keys()) {
    console.log(chave);
}

for (var valor of mapa.values()) {
    console.log(valor)
}

for (var entrada of mapa.entries()) {
    console.log(entrada);
}

//Set

let set = new Set();
set.add(1);
set.add(2);
set.add(1);

for (const valor of set) {
    console.log(valor) //1,2
}


