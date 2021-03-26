{
    // // javascript x
    // function jsAdd(num1, num2){
    //     return num1 + num2; 
    // }

    // function add(num1 : number, num2: number):number{
    //     return num1 + num2; 
    // }

    // function jsFecthNum(id) {

    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // function fecthNum(id:string):Promise<number> {

    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    //javascript =>  typescript 

    function printName(firstName:string, lastName?: string){
        console.log(firstName)
        console.log(lastName)
    }

    printName('Steve', 'Jobs');
    printName('Steve');
    printName('Steve', 'Jobs');

    // default parameter 
    function printMessage(message: string = 'default message'){
        console.log(message);
    }

    printMessage();

    // rest parameter 
    function addNumbers(...numbers: number[]):number {
        return numbers.reduce((a,b)=> a+b);
    }

    console.log(addNumbers(1,2,3,4,5));
}