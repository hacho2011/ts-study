{
    type CoffeeCup = {
        shots: number; 
        hasMilk: boolean; 
    }

    interface CoffeeMaker{
        makeCoffee(shots:number): CoffeeCup; 
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shots:number): CoffeeCup; 
        fillCoffeeBeans(beans: number): void; 
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
        private coffeeBeans: number = 0; // instance level
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans; 
        }

        static makeMachine(coffeeBeans:number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
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

        private extract(shots:number):CoffeeCup {
            return {
                shots, 
                hasMilk:false
            }
        }

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat(); 
            return this.extract(shots);
        }
    }

    // const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    // maker.fillCoffeeBeans(3);
    // maker.makeCoffee(32);

    const maker2:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(3); Can not use 인터페이스에 존재하지 않기 때문에 
    maker2.makeCoffee(1);
    maker2.fillCoffeeBeans(32); 
    maker2.clean(); 

    class AmateurUser {
        constructor(private machine: CoffeeMaker){}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class proBarista {
        constructor(private machine:CommercialCoffeeMaker){}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(32);
            this.machine.clean(); 
        }
    }


    const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);

    const amateur = new AmateurUser(maker);
    amateur.makeCoffee();
    const pro = new proBarista(maker);
    pro.makeCoffee(); 
}

