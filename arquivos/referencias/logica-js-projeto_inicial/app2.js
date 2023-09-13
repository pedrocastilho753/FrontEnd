//exercicio1
//Escreva um programa que receba 2 números e faça a soma entre eles. ( Utiliza alert( ) e prompt( ) )

function exercicio1() {
    let numero1;
    let numero2;
    let resultado;

    numero1 = prompt("digite um numero");
    numero2 = prompt("digite outro numero");
    
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    
    resultado = numero1 + numero2;

    alert(`O resultado da soma de ${numero1} com ${numero2} é ${resultado} `)
}


//exercicio2
//Escreva um programa que pergunte o nome e o sobrenome do usuário e escreva na tela: "Olá, -usuário-".

function exercicio2() {
    let nome;
    let sobrenome;

    nome = prompt("digite seu nome:");
    sobrenome = prompt("digite seu sobrenome:");


    

    alert(`Olá, ${nome} ${sobrenome}`)


}


//exercicio3
//Escreva uma calculadora que receba um valor em reais e converta para dólar. Considere o valor do dólar a R$4,95.

function exercicio3() {
    
    let valorReal;
    let valorDólar = 4.95;
    let conversao;

    valorReal = prompt("digite o valor para conversão:");
   
    valorDólar = parseFloat(valorDólar);
    valorReal = parseFloat(valorReal);
    
   

    conversao = valorReal / valorDólar;

    alert(`O valor em dólar é ${conversao}`);

}


//exercicio4
//Construa um algoritmo que leia um número inteiro na tela e responda o número antecessor e o sucessor.

function exercicio4() {
    
    let numeroInteiro;
    let numeroAntecessor;
    let numeroSucessor;
    let numeroChave = 1;

    numeroInteiro = prompt("Digite um número inteiro:");

    numeroInteiro = parseFloat(numeroInteiro);
    numeroAntecessor = parseFloat(numeroAntecessor);
    numeroSucessor = parseFloat(numeroSucessor);

    numeroAntecessor = numeroInteiro - numeroChave;
    numeroSucessor = numeroInteiro + numeroChave;

    alert(`O sucessor do numero ${numeroInteiro} é ${numeroSucessor} e o antecessor é ${numeroAntecessor}`);
}


//exercicio5
//Construa um algoritmo que calcule o valor de um terreno baseado na sua área e valor por m2.

function exercicio5() {

    let larguraTerreno;
    let comprimentoTerreno;
    let metroQuadrado;
    let valorM2 = 1200;
    let valorTerreno;

    larguraTerreno = prompt("Diga a largura do terreno:");
    comprimentoTerreno = prompt("Diga o comprimento do terreno:");

    larguraTerreno = parseFloat(larguraTerreno);
    comprimentoTerreno = parseFloat(comprimentoTerreno);
    metroQuadrado = parseFloat(metroQuadrado);
    valorM2 = parseFloat(valorM2);
    valorTerreno = parseFloat(valorTerreno);
    
    metroQuadrado = larguraTerreno * comprimentoTerreno;
    valorTerreno = valorM2 * metroQuadrado;
    
    alert(`O terreno vale ${valorTerreno} reais`);
}


//exercicio6
//Construa um algoritmo que leia a distância percorrida por um veículo em km e o total gasto em 
//combustível em litros. No final deverá ser respondido o consumo médio deste veículo em km/l.

function exercicio6() {

let distanciaPercorrida;
let gastoCombustivel;
let kmL;

distanciaPercorrida = prompt("Digite a distancia percorrida, em quilometros:");
gastoCombustivel = prompt("Digite o total de combustivel gasto, em litros:");

distanciaPercorrida = parseFloat(distanciaPercorrida);
gastoCombustivel = parseFloat(gastoCombustivel);
kmL = parseFloat(kmL);

kmL = distanciaPercorrida / gastoCombustivel;


alert(`O veiculo fez ${kmL} Km/L.`);

}

//exercicioExtra
//Aproveite o programa do exercício 1 e refatore para que agora ele consiga fazer cálculos com as 4 operações (+, - * e /). 

function exercicioExtra() {

    
        let numero1;
        let numero2;
        let operaçaoDesejada;
        let resultado1;
        let resultado2;
        let resultado3;
        let resultado4;
    
        numero1 = prompt("digite um numero");
        numero2 = prompt("digite outro numero");
        operaçaoDesejada = prompt("Diga a operação desejada:");

        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
        operaçaoDesejada = parseFloat(operaçaoDesejada);
        resultado1 = parseFloat(resultado1);
        resultado2 = parseFloat(resultado2);
        resultado3 = parseFloat(resultado3);
        resultado4 = parseFloat(resultado4);

        resultado1 = numero2 + numero1
        resultado2 = numero1 - numero2
        resultado3 = numero1 * numero2
        resultado4 = numero1 / numero2

        switch(operaçaoDesejada){
            case "+":
                alert(`O resultado é ${resultado1}`);
                break;
            case "-":
                alert(`O resultado é ${resultado2}`);
                break;
            case "*":
                alert(`O resultado é ${resultado3}`);
                break;
            case "/":
                alert(`O resultado é ${resultado4}`);
                break;
            default:
                alert(`Operação não encontrada`);
        }
         
        
        
        
       


}


exercicioExtra()