{
    type CoffeeCup = {
        shots: number; 
        hasMilk?: boolean; 
        hasSugar?: boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots:number): CoffeeCup; 
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
        private coffeeBeans: number = 0; // instance level
        
        public constructor(coffeeBeans: number) {
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

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup
    }


    class CheapMilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log("steamiing");
        }
        makeMilk(cup:CoffeeCup):CoffeeCup {
            return  {
                ...cup, 
                hasMilk: true
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log("Fancy steamiing");
        }
        makeMilk(cup:CoffeeCup):CoffeeCup {
            return  {
                ...cup, 
                hasMilk: true
            }
        }
    }

    class ColderMilkSteamer implements MilkFrother{
        private steamMilk():void {
            console.log("Cold Milk steamiing");
        }
        makeMilk(cup:CoffeeCup):CoffeeCup {
            return  {
                ...cup, 
                hasMilk: true
            }
        }
    }

    class CaffeeLatteMachine extends CoffeeMachine {
        constructor(
            beans:number, 
            public readonly serialNumber: string, 
            private milkFother:MilkFrother
        ){
            super(beans)
        }
   
        makeCoffee(shots: number): CoffeeCup {
            const coffee= super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class CandySugarMixer implements SugarProvider {
        private getSugar() {
            console.log("add sugar");
            return true; 
        }
        
        addSugar(cup:CoffeeCup):CoffeeCup {
            const sugar = this.getSugar(); 
            return  {
                ...cup, 
                hasSugar: sugar,
            }
        }
    }

    class JarSugarMixer implements SugarProvider {
        private getSugar() {
            console.log("add jar sugar");
            return true; 
        }
        
        addSugar(cup:CoffeeCup):CoffeeCup {
            const sugar = this.getSugar(); 
            return  {
                ...cup, 
                hasSugar: sugar,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(
            beans:number,
            private sugar: SugarProvider
        ){
            super(beans); 
        }


        makeCoffee(shots:number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }

    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(
            private beans:number, 
            private milk:MilkFrother, 
            private sugar:SugarProvider
        ){
            super(beans); 
        }
        makeCoffee(shots:number):CoffeeCup {
            const coffee = super.makeCoffee(2);
            const sugar = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugar);
            
        }

    }


    const cheapMilkMaker = new CheapMilkSteamer(); 
    const fancyMilkMaker = new FancyMilkSteamer(); 
    const coldMilkMaker = new ColderMilkSteamer(); 

    const candySugar = new CandySugarMixer();
    const jarSugar = new JarSugarMixer();

    const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
    const sweetSugarMachine = new SweetCoffeeMaker(12, jarSugar);


    const latteMachine = new CaffeeLatteMachine(12, 'SS', cheapMilkMaker);
    const coldLatteMachine = new CaffeeLatteMachine(12, 'SS', coldMilkMaker);
    const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);


}

