{
    type CoffeeCup = {
        shots: number; 
        hasMilk?: boolean; 
        hasSugar?: boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots:number): CoffeeCup; 
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
        private coffeeBeans: number = 0; // instance level
        
        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans; 
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans sholud be greater then 0');
            }
            this.coffeeBeans += beans; 
        }

        clean(){
            console.log("cleaning");
        }

        private grindBeans(shots:number){
            console.log(`grinding beans for ${shots}`); 
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT; 
        }

        private preheat():void {
            console.log('heating up')
        }

        protected abstract extract(shots:number):CoffeeCup;

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat(); 
            return this.extract(shots);
        }
    }

    class CaffeeLatteMachine extends CoffeeMachine {
        constructor(beans:number, public readonly serialNumber: string){
            super(beans)
        }
        private steamMilk():void {
            console.log("steamiing");
        }

        protected extract(shots:number): CoffeeCup {
            this.steamMilk(); 
            return {
                shots, 
                hasMilk:true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots:number): CoffeeCup {
            return {
                shots, 
                hasSugar:true
            }
        }

    }

    const machines: CoffeeMaker[] = [
        new CaffeeLatteMachine(16, "1"),
        new SweetCoffeeMaker(16),
    ];

    machines.forEach(machine => {
        console.log("================");
        machine.makeCoffee(2);
    })





}

