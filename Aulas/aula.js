/*letidade=5;
console.log(idade);
letaltura=180
console.log(altura)*/

//Nãopodecomeçarumavariavelcomnumero
//Nãopodecolocarespaços
//canelCase-letrasmaiusculasemin..fazemdiferenças



/*OBJETOS
letpessoa={
nome:'ludi',
idade:18,
altura:156,
};

console.log(pessoa);*/


//ARRAYS
/*
letfamilia=['cleide','vilmar','eliza','ludi'];
console.log(familia.length)
console.log(familia);

letcaio=[19,'paracatu',174];
console.log(caio);*/


//FUNÇÃO-Verbo+Substantivo
/*let corSite="azul";
functionresetaCor(cor,tonalidade){//doisparamêtrosforamadd
corSite=cor+''+tonalidade;
};

console.log(corSite);
resetaCor("pink","escuro");//aquiestásendoadicionadoparamêtros
console.log(corSite);

MEUEXEMPLO-

let idade=18;
functionmudaIdade(numero){
idade=numero;
}
console.log(idade);

mudaIdade(20);
console.log(idade);*/

//TIPOSDEFUNÇÕES
//Realizaumatarefaenãodevolvenada
/*functiondizerNome(){
console.log('ludi');
}
dizerNome();
//Fazumcalculoouoperaçãoeretorna
functionmultiplicarPorDois(valor){
returnvalor*2;
}
//console.l*/


//OPERADORESARITIMETICOS+-*/**(exponecial)

/*letsalario=100;
console.log(salario*salario)
console.log(10**10)

//Incremento(++)edecremento(--)
letidade=18;
//console.log(++idade)
console.log(--idade);



//OPERADORESATRIBUIÇÃO
letvalorTeclado=100;
//valorTeclado=valorTeclado+valorTeclado;
valorTeclado+=valorTeclado//essaexpressãosomaousubtraiovalordoindividuo
console.log(valorTeclado);*/

//OPERADORESDEIGUALDADE
//Igualdadeestrita(usaressa)-comparatipotbm
/*console.log(1===1);//estácomparandoosvaloresetipos
console.log('1'===1);

//Igualdadesolta-elenãocomparaotipo
console.log(1==1);
console.log('1'==1);*/

//OPERADORTERNÁRIO
//clienteacimade100épremium
/*letpontos=80;
lettipo=pontos>100?'premium':'comum';
console.log(tipo);*/


//OPERADORESDECOMPARAÇÃO

//OPERADORESLÓGICOS
//operadorlogicoe(and)(&&)

//console.log(false&&true);

//Operadorou/or(||)

/*letmaiorDeIdade=false;
lettemcarteira=true;
letpodeAplicar=maiorDeIdade||temcarteira;

console.log('podeaplicar:',podeAplicar);

//Operadornot(!)

letcandidatoRecusado=!podeAplicar;

console.log('Candidatorecusado',candidatoRecusado);
*/

//COMPARAÇÃONÃOBOOLEANA
//Falsy-unfefined,null,o,false,'',NaN-notanumber
//Truthy-
/*

letcorPersonalizada='';
letcorPadrao='azul';
letcorPerfil=corPersonalizada||corPadrao;

console.log(corPerfil);*/

//OPERADORESBITWISE
/*
//Miniprojeto1-trocando/invertendovaloresdasvariaveis
leta='vermelho';
letb='azul';

letc=a;
a=b;
b=c;

console.log(a);
console.log(b);
*/


//IF E ELSE

/*let hora=22;
if(hora>6&&hora<12){
console.log("Bomdia!");

}
elseif(hora>12&&hora<18){
console.log("Boatarde");
}
else{
console.log("Boanoite");
}
*/

//SWITCH E CASE
/*letpermissao;//comum,gerente,diretor
permissao='comum';
switch(permissao){
case'comum':
console.log('usuáriocomum');
break;

case'gerente':
console.log('usuáriogerente');
break;

case'diretor':
console.log('usuáriodiretor');
break;
}
*/

//LAÇO LOOP FOR
//for(leti=1;i<=5;i++){

//console.log('Estou aprendendo',i);
/*
for(let i=5; i>=1; i--) {
    if (i % 2 !== 0){
        console.log(i); 
    }
}*/

//WHILE LOOP
/*let i= 5;
while ( i >= 1){
    if ( i% 2 !== 0){
        console.log (i);
    }
    i--;
}
*/

//DO WHILE
/*let i= 0;
do {
    console.log('digitando!',i);
    i++; // nunca esqueça de colocar isso
} while (1 < 10)

*/

//FOR IN - para interar sobre propriedades de objetos ou elementos de um array
 /*
const pessoa = {
    nome: 'ludi',
    idade: 18
};

//key(chave)-value(pessoa) 
for(let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores= ['vermelho', 'verde', 'azul'];
for (let indice  in cores){
    console.log (indice, cores[indice]) //para add o nome das cores e quais são os indices delas
}


//FOR OF-
const cores= ['vermelho', 'verde', 'azul'];
for (let cor of cores){
    console.log(cor);
}

const casa= ['ludi', 'eliza', 'josh'];
for (let family of casa) {
    console.log(family);
} */

//MINI-PROJETO2 - FUNÇÃO QUE USA 2 NUM E RETORNA O MAIOR
/*
let valorMaior = max(30, 20);
console.log(valorMaior);

function max(num1, num2) {
if (num1 > num2) 
return( "O número maior é", num1);
else return ("O número maior é", num2);
*/

//outra maneria
/*let valorMaior = max(30, 20);
console.log(valorMaior);
function max(num1, num2) {
 return num1>num2 ? num1 : num2 ;
}
*/

//FIZZBUZZ
// Divisivel por 3 -> fizz
// Divisivel por 5-> buzz
// Divisivel por por 3 e 5 -> FizzBuzz
// não Divisivel por por 3 e 5  -> entrada
// Não é um número -> Não é um número
/*
const resultado = fizzBuzz(7);
console.log (resultado);

function fizzBuzz(entrada){
    if (typeof entrada !=='number')
     return 'Não é um número';
     if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz';
     if (entrada % 3 === 0 )
    return 'Fizz';
    if (entrada % 5 === 0)
    return 'Buzz';
    if (entrada % 3 !== 0 && entrada % 5 !== 0)
    return entrada
}
*/

//Mini projeto 4
/*
verficarVelocidade (180);
 function verficarVelocidade (velocidade){
const velocidadeMaxima = 70;
const kmPorPonto = 5; 
 if (velocidade <= velocidadeMaxima)
  console.log ('Ok');
  else {
  const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if (pontos >= 12)
        console.log ('Carteira Suspensa');
        else 
        console.log('pontos', pontos); 
  }
}
*/
/*
MINI PROJETO 6

exibirTipo(10);
limite= i;
function exibirTipo(limite){
    for(let i=0; i <=limite; i++ )
         if (i % 2 === 0)
            console.log('Par',i );
        else  console.log ('impar', i)

}

*/

// MINI PROJETO 6
/*
const filme= {
    titulo : 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'

}

exibitPropriedades (filme);
function exibitPropriedades(obj){
    for(let prop in obj) 
    if (typeof obj[prop] === 'string')
        console.log(prop,obj[prop]); // pega a propriedade dentro do objeto
}
*/

//MINIPROJETO 7
/*somar(10);
function somar(limite) {
let Multiplo3 = 0 ; 
let Multiplo5 = 0;
for( i= 0; i <= limite; i++) {
    if (i % 3 === 0)
    Multiplo3 += i ; // Multiplo3 = Multiplo3 + i ;
    if (i % 5=== 0)
    Multiplo5 += i ;   
}
    console.log ( Multiplo3 + Multiplo5 );
}*/

 //MINIPROJETO 8- NOTA ESCOLAR
/*
 const array = [70, 70 ,80];

 console.log(mediaAluno(array));

 function mediaAluno (notas){
    const media = calcularMedia(notas);

        if ( media < 59) return 'F';
        if ( media < 69) return 'D';
        if ( media < 79) return 'C';
        if ( media < 89) return 'B';
        else return 'A'
 }

 function calcularMedia(array){
     let soma = 0; 
    for (let valor  of array){
        soma += valor; 
    }
    return soma/(array.lenght);
 }*/

//exibirAsteriscos(5);
/*
function exibirAsteriscos (linhas){
    let padrao = '';
    for (let linha= 1; linha <=linha; linha++){
        padrao += '*';
        console.log(padrao);
    }
}
*/

/*
for (let linha= 1;linha<= linhas, linha ++){
    let padrao = '';
    for (let i=0; i <linha; i++){ //um loop dentro de out
        padrao += '*';
    }
    console.log(padrao);
    }
}
*/
/*
exibirNumerosPrimos(15);
function exibirNumerosPrimos(limite){
    for (let numero=2; numero <= limite; numero++){
        if (numeroPrimo (numero)) console.log (numero);
        }
    }
function numeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor ===0){
         return false;
        }
    }
    return true;
}
*/

//FACTORY FUNCTIONS
/*const celular = {
    marcaCelular: 'ASUS'
    tamanhoTela:{
        vertical: 155,
        horizontal:75
    },
    capacidadeBateria: 5000,
    ligar: function (){
        console.log("Fazendo ligação...")
    }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    const celular = {
        return {
        marcaCelular: marcaCelular,
        tamanhoTela: tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}
const celular1=criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);
*/

//CONSTRUCTOR FUNCTIONS
/*
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
        return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

        //Pascal Case=UmDoisTresQuatro
    function Celular (marcaCelular,tamanhoTela,capacidadeBateria){
        this.marcaCelular= marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria= capacidadeBateria,
        this.ligar= function(){
            console.log('Fzendo ligação...');
        }
}

    const celular = new celular('asus',5.5, 5000); //vamos criar atraves do new e outro fazemos dentro da função mesmo,aqui criamos um objeto novo na hor de estanciar
    console.log(celular);*/

    //NATUREZA DINAMICA DE OBJETOS- são totalmente dinamicos
    /*const mouse = {
        cor: 'red',
        marcar:'dazz'
    }
    mouse.velocidade = 5000;
    mouse.trocarDPI=  function(){
        console.log('mundando DPI');
    }
    delete mouse.velocidade;
    delete mouse.trocarDPI;
    console.log(mouse);*/

//CLONANDO OBJETOS
/*
const celular = {
    marcaCelular:'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar:function(){
        console.log("Fazendo ligação...");
    }
}

const novoObjeto Object.assign({},celular ); //para onde vai,
console.log (novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);
*/

/*MATH - Javascript Math
Math.random() //Vai colocr um valor qualquer
Math.max(3,6,7)// irá dizer qual o maior valor
Math.min(4,5,6,7)// qual é o menor valor
*/

//STRING- TIPOS - javascript string
//PRIMITIVOS
/*const mensagem= 'minha primeira mensagem';
//ObJETO- pode usar como objeto
const outraMensagem= new string ('Bomd dia');
Usados no console
outraMensagem.length
outraMensagem [2] - pode acessar por indice a informação dentro de um string
Mensagem.include('primeira')- true / pq existe a primeira no codigo
Mensagem.startwith
Mensagem.endwith
mensagem.indexof('primeira')-Indice da primeira palavra dentro do string
Mensagem.replace('minha', 'sua') troca as palavras
mensagem.trim() tira os espaços a mais, excedentes
Mensagem.split(' '); irá quebrar a palavra
*/

//TEMPLATE LITERAL- javascript escape sequence
/* 
const mensagem = 'Minha primeira\n' +
'\'mensagem\' mensagem';

Object {} 
BOOLEAN true,false
String
Template  ``


const outra = `Oi tudo bom
'é a minha primeira' mensage`


const nome= 'rafael';
const email =
`Olá ${nome} ${2+2}

obrigada

valeu

ludi`;
*/

//DATE- javascript date- Tipos embutidos em javascript
/*const data1= new Date();
const data2= new Date('March 06 2019 09:10');
const data3= new Date(2020,11,01,16,28);

data3.setFullYear(2030); //se colocar o ano errado, pode mudar com isso

NO CONSOLE:
data2.toDateString() //mostra o formato string
data2.toTimeString()// informação de tempo local
data2.toISOString() // do banco de dados
*/

//MINI PROJETO 11- MONTADOR DE ENDEREÇO

/*
let endereco ={
    Rua: 'a',
    cidade: 'b',
    CEP: 'c'
};

function exibirEndereco (endereco){
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}
exibirEndereco(endereco); */

// MINI PROJETO 12- IGUALDADE DE OBJETOS
 /*
function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep,}
const endereco1= new Endereco ('a','b','c');
const endereco2= new Endereco ('a','b','c');

function saoIguais (endereco1,endereco2){
    return endereco1.rua===endereco2.rua &&
            endereco1.cidade=== endereco2.cidade &&
            endereco1.cep===endereco2.cep
}
console.log(saoIguais(endereco1,endereco2));

function temEnderecoMemoriaIguais (endereco1,endereco2){
return endereco1 === endereco2
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2));
*/

//MINI PROJETO 13 - MONTADOR DE POSTAGEM DE BLOG
 /*
let postagem ={
    titulo:'a',
    mensagem:'b',
    autor:'c',
    visualizacoes: 10,
    comentarios : [
       { autor: 'a', mensagem:'b'}, 
       { autor: 'a', mensagem:'b'} 
    ],
    estaAOVivo: true
}
console.log(postagem);*/

/*CONSTRUCTION FUNCTION-EXEMPLOS
function Postagem(titulo,mensagem,autor){
    this.titulo =  titulo,
    this.mensagem= mensagem,
    this.autor = autor,
    this.comentarios= [],
    this.estaAoVivo= false
}
let postagem = new Postagem ('a','b','c');
console.log(postagem);*/




/*
//FAIXA DE PREÇO - ARRAY
let faixas = [
    {tooltip: 'até 700', minimo: 0, maximo:700},
    {tooltip: 'de 700 ate 1000', minimo: 700, maximo:1000},
    {tooltip: '1000 ou mais', minimo: 1000, maximo:999999}
];

//segunda opção (Factory Function)

function criarFaixaPreco(tooltip,minimo,maximo)  {
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,100000),
]
//Terceira Opção (constructor Function)
function faixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo =  maximo
}
let faixa3 =[
    new faixaPreco('d',10,20),
    new faixaPreco('e',30,40),
    new faixaPreco('f',45,59)
]
console.log (faixas);
console.log(faixa2);
console.log(faixa3); */

//INTRODUÇAO A ARRAYS 
//Add novos elementos ao array- 
/*
const numeros = [1,2,3];

//Inicio - insere o valor no inicio
numeros.unshift(0);
console.log(numeros);

//Meio
numeros.splice(1,0,'a'); //coloca o indice, aonde que será inserido no meio
console.log(numeros);

//Final
numeros.push(5);
console.log(numeros);
*/

/*Meu exemplo
const nomes = ['lu', 'ludi', 'milla'];
nomes.unshift('primeiro apelido');
console.log(nomes);

nomes.splice(2,3,'Segundo apelido')
console.log(nomes);

nomes.push('meu nome é ludimilla');
console.log(nomes);
*/

/*
//ENCONTRAR ELEMENTOS(PRIMITIVOS)
const numeros = [1,2,3,4];
console.log(numeros.indexOf(2)); //vai retornar o numero dentro do array
const numeros = [1,2,3,4,1];
console.log(numeros.lastIndexOf(1)); //vai encotrar a ultima ocorrencia do valor passado
const numeros = [1,2,3,4,1];
console.log(numeros.indexOf(2) !== -1);
const numeros = [1,2,3,4];
console.log(numeros.includes(2)); //vai retornar true or false
*/

//TIPO DE REFERENCIA -javascript find array
/*const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];
const marca= marcas.find(function(marca){
    return marca.nome == 'a';
});
console.log(marca);
*/

//ARROW FUNCTIONS - Declarar metódos e corpos de metódos
/*const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];
console.log (marcas.find (marca => marca.nome == 'a')); 
//tem parametro então podemos remover o function
*/

/*
REMOVER ELEMENTOS DOS ARRAYS
const numeros= [1,2,3,4,5,6];
numeros.push ();
numeros.unshift();
numeros.splice();

//final
const ultimo = numeros.pop(); //para remover do final
console.log (ultimo);
console.log(numeros);

//Inicio
const primeiro  = numeros.shift(); //para remover o primeiro numero
console.log(primeiro);
console.log (numeros);

//Meio
const meio = numeros.splice(2,1) //qual indice q vai remover, e quantos quer que remova
console.log(meio);
console.log(numeros);
*/


/*
//ESVAZIANDO UM ARRAY
let numeros= [1,2,3,4,5,6];
let outros =  numeros;

//SOLUÇÃO 1
numeros= []; // se tem mais de uma referencia desse array, é possível que não esteja apagando elas

//SOlUÇÃO 2 (MELHOR FORMA)- apaga todas as referencias
numeros.lenght = 0;
console.log(numeros);
console.log(outros);

//SOLUÇAO 3
numeros.splice(0,numeros.lenght);
console.log(numeros);
console.log(outros);

//SOLUÇAÕ 4
while(numeros.lenght > 0)
numeros.pop();
*/
/*
//COMBINAR E DIVIDIR ARRAYS
const primeiro = [1,2,3];
const segundo = [4,5,6];
//combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);
//Dividir - primeira maneira 

const cortado = combinado.slice(1,3);
console.log(cortado); 

//segunda maneira- vai extrair todos os valores
const cortado = combinado.slice(1); //pode deixar sem nada dentro
console.log(cortado);
*/
/*
//OPERADO SPREAD EX6
const primeiro = [1,2,3];
const segundo = [4,5,6];
//combinar
const combinado = [...primeiro, 'a', ...segundo];
console.log(combinado);

//PARA CLONAR ES6
const clonado = [...combinado];
console.log(clonado)
*/

//FOREACH ES6
/*
const numeros = [1,2,3,4,5];

numeros.forEach ((numero, indice) => console.log(numero,indice))
*/


//COMBINAR ARRAYS ES6
const numeros = [1,2,3,4,5];
const combinado = numeros.join('.');
console.log(combinado);

const frase ='Bem vindos a todos';
const resultado =  frase.split(' ');
console.log(resultado);
console.log(resultado.join('-'));

