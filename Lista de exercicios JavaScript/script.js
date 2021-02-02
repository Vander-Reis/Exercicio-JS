// 1 - Escreva uma função que receba dois números e retorne o maior deles

function numMaior(num1, num2) { // função para receber dois números

    if (num1 > num2) {
      return num1;
    }

    else {
      return num2;
    }

}

console.log("O maior número é " + numMaior(5,8));

// retornar o menor número 

function numMenor(num1, num2) {

  if (num1 > num2) {
    return num2;
  }
  else{
    return num1;
  }
}

console.log("O menor número é " + numMenor(5,8))

// 2 - Escreva uma função que receba um Array com 3 números e imprima eles em ordem

function ordernarLista(lista) {
  var crescente = lista.sort((a,b) => a-b) // função para saber qual o menor número 
  for(let num of crescente){
    console.log(num);
  }
}

ordernarLista([25,1,3])

// Escreva uma função que receba um Array com 3 números e imprima eles em ordem decrescente

function listaOrdenada(lista) {
  var decrescente = lista.sort((a,b) => b-a)  // função para saber qual o maior número 
  for(let num of decrescente){
    console.log(num);
  }
}

listaOrdenada([25,1,3]);

// 3 - Escreva uma função que receba um Array com 5 números e retorne o maior deles

function maiorNum(lista){
  return Math.max.apply(Math, lista)
}

var mairEntreEles = [10, 2, 75, 1, 50];

console.log("O maior número é " + maiorNum(mairEntreEles));

// 4 - Escreva uma funçao que receba um array de 5 números e retorne a média

function media(lista) {
  var total = 0;

  for(let num of lista) {
    total += num
  }

  return total/lista.length
}

console.log("A media é " + media([25,10,9,8]))

// 5 - Escreva uma função que receba um número e imprima se ele é par ou ímpar

function parOuImpar(num) {
  if (num%2 == 0) {
    console.log("Par!")
  }
  else {
    console.log("Impar!")
  }
}
parOuImpar(9)

// 6 - Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

for(var index = 0; index <= 100; index ++) {
  if (index % 4 == 0) {
    console.log("pi")
  }

  else {
    console.log(index)
  }
}

// 7 - Escreva uma função que receba um objeto e imprima suas propriedades

function propriedades(object){
  for(let propriedade in object){
      console.log(propriedade)
  }
}

var pessoa = {nome: "José", idade:35, altura: 1.80}

propriedades(pessoa);


// 8 - Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

function data(d){
  var meses = ['Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro']
 return {
      dia:d.getDate(),
      mes: meses[d.getMonth()],
      ano: d.getFullYear()
  }
}

console.log(data(new Date(Date.now())))

// 9 - Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade

function pessoas(listaDePessoas){
  var maiorAltura = 0;
  var menorAltura = 100 ; // aqui eu coloquei um valor alto, porque se eu coloca-se 0 ia ser a menor altura  
  var idades = []
  for(let pessoa of listaDePessoas){
      maiorAltura = numMaior(maiorAltura,pessoa.altura) // aqui eu reutilizei a função do primeiro exercicio 
      menorAltura = numMenor(menorAltura, pessoa.altura)  // aqui eu reutilizei a função do primeiro exercicio 
      idades.push(pessoa.idade)
  }
  console.log("A Maior altura é: "+ maiorAltura)
  console.log("A Menor altura é: "+ menorAltura)
  console.log("A média entre as idades é: "+ media(idades))  // aqui eu reutilizei a função do quarto exercicio 
  idades.push(pessoa.idade)

}

  pessoas([{altura:1.6,idade:25},
   {altura:1.5,idade:18},
   {altura:1.66,idade:21},
   {altura:1.80,idade:42},
   {altura:1.94,idade:54},
   {altura:1.43,idade:20}])


// 10 - Escreva um programa que imprima o seguinte padrão
  // *
  // * *
  // * * *
  // * * * *
  // * * * * *

  function estrelas(altura){
    for(let i = 1; i <=altura;i++){
        let string = ""
        for(let j =1 ;j<= i; j++){
            string +="* "
        }
        console.log(string)
    }
}
 estrelas(5)