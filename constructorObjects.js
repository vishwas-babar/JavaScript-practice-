function Player(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.printDetails = function() {
        console.log("name: " + this.name + "\tage: " + this.age + "\tweight: " + this.weight);
        // console.log("hello");
    };
}

const player1 = new Player("vishwas", 19, 55);
player1.printDetails();

const player2 = new Player("vishal", 19, 52);
player2.printDetails();