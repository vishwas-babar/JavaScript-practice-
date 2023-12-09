function Player(name, age) {
    this.name = name;
    this.age = age;
}

const player1 = new Player("mark", 40);
const player2 = new Player("andrew", 39);

console.log(Player.prototype);


// this indian property is added to all objects of Player
Player.prototype.nationality = "indian";

console.log(player1.nationality);
console.log(player2.nationality);

function States(name, capital) {
    this.name = name;
    this.capital = capital;
}

const mh = new States("maharashtra", "mumbai");
console.log(mh);

//we can accesss this property with all object this property is applied to all object because object is top of object inheritance chain
Object.prototype.belongsTo = "india";
Object.prototype.showDetails = function(obj) {
    console.log(obj.name + "\t" + obj.belongsTo);
}

console.log(mh.belongsTo);
console.log(player1.belongsTo);
mh.showDetails(mh);