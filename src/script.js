let victories = parseInt(prompt("Digite a quantidade de vitórias"));
let defeats = parseInt(prompt("Digite a quantidade de derrotas"));
let rank;
let cor;

let difference = calculateDifference(victories, defeats);
determineLevel(difference);
display(difference);

console.log(`O Herói tem de saldo de ${difference} está no nível de ${rank}`);

function calculateDifference(victories, defeats){
    return victories - defeats;
}

function determineLevel(difference){
    if (difference < 10) {
        rank = "Ferro";
        cor = "gray";
    } else if (difference >= 11 && difference <= 20) {
        rank = "Bronze";
        cor = "saddlebrown";    
    } else if (difference >= 21 && difference <= 50) {
        rank = "Prata";
        cor = "silver";
    } else if (difference >= 51 && difference <= 80) {
        rank = "Ouro";
        cor = "gold";
    } else if (difference >= 81 && difference <= 90) {
        rank = "Diamante";
        cor = "lightblue";
    } else if (difference >= 91 && difference <= 100) {
        rank = "Lendário";
        cor = "#32CD32";
    } else {
        rank = "Imortal";
        cor = "#FF6347";
    }
}

function display(difference){
    document.querySelector('#header').innerHTML = `O Herói tem de saldo de ${difference} está no nível de <span style="color:${cor}; text-decoration: underline;">${rank}</span>`;
}