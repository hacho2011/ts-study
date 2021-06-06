{
    type CoffeeCup = {
        shots: number; 
        hasMilk: boolean; 
    }


    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
        private coffeeBeans: number = 0; // instance level
        
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans; 
        }

        static makeMachine(coffeeBeans:number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans sholud be greater then 0')''
            }
            this.coffeeBeans += beans; 
        }

        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans');
            }
    
            this.coffeeBeans == shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots, 
                hasMilk:false
            }
    
        }
    }


    const maker = new CoffeeMaker(32); 
    maker.fillCoffeeBeans(3);
    // maker.coffeeBeans = -3; //invalid
}
