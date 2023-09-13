alert("Bem vindo ao jogo da adivinhação");

var numeroScreto = 4;
var chute = prompt("Chute um número de 1 - 10");

// Compara o chute com o número
if(chute == numeroScreto){
    alert("Você acertou!");
} else {
    alert("Erroooou!");

    if(chute > numeroScreto){
        alert("O número secreto é menor que " + chute);
    } else {
        alert("O número secreto é maior que " + chute);
    }

    
}



