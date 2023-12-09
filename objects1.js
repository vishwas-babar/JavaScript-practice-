const player1 = {
    name:"vishwas",
    weight:55
}

const player2 = {
    name:"dinesh",
    weight:65
}

// printHigherWeightPlayer(player2);
if (player1.weight > player2.weight) {
    printHigherWeightPlayer(player1);
}
else if (player2.weight > player1.weight) {
    printHigherWeightPlayer(player2);
}else{
    console.log("both players weights are equal!");
}

function printHigherWeightPlayer(player) {
    console.log(player.name + " has high weight with " + player.weight + "KG!");
}