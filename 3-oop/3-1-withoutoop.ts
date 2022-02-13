{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 7;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("not enough coffeeBeans");
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  const coffee = makeCoffee(1);
  console.log(coffee);
}
