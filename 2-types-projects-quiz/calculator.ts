/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


function calculate(type:string, num1:number, num2:number):number{

    if(type == 'add'){
      return num1 + num2; 
    }else if(type =='substract'){
        return  num1 - num2; 
    }
    else if(type =='multiply'){
        return num1 * num2; 
    }
    else if(type =='divide'){
        return num1 / num2; 
    }else if(type =='remainder'){
        return num1 % num2; 
    }else {
        throw Error('nope')
    }

}


type Command = 'add'| 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate2(type:Command, num1:number, num2:number):number{

   switch(type){
       case 'add':
           return num1+ num2;
        case 'substract':
            return num1-num2; 
        case 'multiply':
            return num1*num2; 
        case 'divide':
            return num1/num2; 
        case 'remainder':
            return num1%num2; 

   }
}