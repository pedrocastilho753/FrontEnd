// exercicio01
//Escreva um programa que recebe um número digitado pelo usuário e responda se o número inserido é par ou ímpar ou 0. 

function exercicio01(){

   let numeroDigitado = prompt("digite um número: ");

   
   
   
   if( (numeroDigitado == 0 ) ) {
    alert("0 é neutro.");
   } else if (( numeroDigitado % 2 ) == 0 ){
    alert("o número é par.");
   } else {
    alert("O número é impar.");
   }


}

// exercicio02
//Desenvolva um algoritmo que seja capaz de receber dois números digitados pelo usuário e diga qual deles é maior.

function exercicio02(){

    let num1 = prompt("Insira o primeiro número:");
    let num2 = prompt("Insira o segundo número:");

   
    if (( num1 < num2)){
          alert(`O numero ${num2} é maior`);
    }else if ((num1 > num2)){
          alert(`O numero ${num1} é maior.`);
    }else {
          alert(`Os números são iguais.`);
}

}
exercicio02()


// exercico03
// Um banco contratou você para que escreva um programa que irá ser utilizado pelo usuário em um tablet. 
// O programa irá fazer 3 perguntas e encaminhar o cliente para 2 filas. A fila comum e a fila preferencial. 
// Se o cliente atender a uma das condições a seguir ele deve ser encaminhado para a fila preferencial. As condições são: Ter mais de 65 anos, se deficiente ou gestante. 

function exercicio03(){

    let perg1 = prompt("Digite a sua idade:");
    let perg2 = prompt("Você tem alguma deficiência?");
    let perg3 = prompt("Você esta gravida?");

    
    
    if ( perg1 || perg2 || perg3){
    alert(`Sua fila é a preferêncial.`);
    }else{
    alert(`Sua fila é a normal.`)
    }


}


// exercico04
// Um cliente que promove eventos e solicitou um programa que seja capaz de identificar se uma pessoa é maior de idade.
// Pessoas com menos de 16 anos não podem entrar nos eventos. Entre 16 e 18 anos somente acompanhado pelos responsáveis. 
// Maiores de 18 podem entrar normalmente. Escreva o programa em Java.

function exercicio04(){



}

// exercico05
//Crie um algoritmo que receba login e senha e verifique as credenciais. Caso algum deles estiver errado o programa 
//deve retornar ao usuário quais das opções está errada, se é o login ou a senha. 

function exercicio05(){

    let email = pedrocastilho753
    let senha = 12345678

 




}



// exercicio06
// Crie um joguinho de perguntas e respostas múltipla escolha. O programa deverá fazer 3 perguntas (Uma por vez). 
// Se o usuário acertar as 3 perguntas ele ganha o jogo. Se ele errar 3 vezes ele perde o jogo. 

function exercicio06(){



}

