const x = {};
const y = {};

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instace member level
}

CoffeeMachine.prototype.makeCoffee = () => {
  console.log("making...2");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(29);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
