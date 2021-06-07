{
    type CoffeeCup = {
        shots: number; 
        hasMilk: boolean; 
    }


    // public
    // private
    // protected  - 상속시 클래스를 상속한 자식에서만 접근 가능
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level
        private coffeeBeans: number = 0; // instance level
        
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans; 
        }

        static makeMachine(coffeeBeans:number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans sholud be greater then 0');
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


    // const maker = new CoffeeMaker(32); can not use anymore
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(3);
    // maker.coffeeBeans = -3; //invalid

    /*
    class User {
        private firstName: string; 
        private lastName: string; 
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        constructor(firstName:string, lastName:string) {
            this.firstName = firstName; 
            this.lastName = lastName; 
        }
    }
*/
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4; 
        get age():number {
            return this.internalAge;
        }
        set age(num:number){
            if(num < 0){
                
            }
            this.internalAge = num; 
        }
        constructor(private firstName:string, private lastName:string) {}
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6; 
    console.log(user.fullName);
}

