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


