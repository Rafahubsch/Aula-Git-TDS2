//Rafaela Tristão Hubsch
//exemplo ARRAY
let frutas = ["Morango", "Manga", "Limão", "Açai"];
console.log (sucos[0]);
//Criando um array de numeros
let numeros =[1,2,3,4,5];
console.log (numeros[2]);

//Acessando um elemento especifico do array
let animais= ["Cachorro", "Gato", "Passaro", "Peixe"];
console.log (animais[1]);

//Alterando um elemento do array
let times = ["Flamengo","Palmeiras", "São Paulo", "Corinthians"];
console.log (times);

//Descobrindo o tamanho do array
let games = ["FIFA", "Call of Duty", "Minecraft", "Fortinite"];
console.log (games.length);

//Adicionando um elemento ao final do array
let cores = ["Vermelho", "Azul", "Verde"];
cores.push("Amarelo");
console.log(cores);

//Removendo o último elemento do array
let carros = ["Fusca", "Gol", "Civic", "Corolla"];
carros.pop();
console.log(carros);
//Removendo o primeiro elemento do array
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];
cidades.shift();
console.log (cidades);

//Adicionando um elemento no inicio do array
let paises = ["Brasil", "Argentina", "Chile"];
paises.unshift ("Uruguai");
console.log (paises);
 //Mostrando todos os elementos do array com for
 let frutas1 = ["maça", "banana", "laranja","uva"]
 for (let i=0; i < frutas.length; i++) {
console.log (frutas[i]);
 }