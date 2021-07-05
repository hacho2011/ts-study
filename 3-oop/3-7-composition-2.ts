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
        
        public constructor(coffeeBeans: number, private milk: MilkFrother, private sugar:SugarProvider) {
            this.coffeeBeans = coffeeBeans; 
        }

        // static makeMachine(coffeeBeans:number): CoffeeMachine {
        //     return new CoffeeMachine(coffeeBeans);
        // }

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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded)
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

    class NoMilk implements MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup {
            return cup; 
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

    class NoSugar implements SugarProvider{
        addSugar(cup:CoffeeCup):CoffeeCup {
            return cup; 
        }
    }

    const cheapMilkMaker = new CheapMilkSteamer(); 
    const fancyMilkMaker = new FancyMilkSteamer(); 
    const coldMilkMaker = new ColderMilkSteamer(); 
    const noMilk = new NoMilk(); 

    const candySugar = new CandySugarMixer();
    const jarSugar = new JarSugarMixer();
    const noSugar = new NoSugar(); 

    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetSugarMachine = new CoffeeMachine(12, noMilk, jarSugar);
    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker,noSugar);


}

