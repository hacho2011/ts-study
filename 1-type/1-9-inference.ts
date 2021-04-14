/**
 * Type Inference
 */

let text ='hello';
// text =1;  //자동으로 에러

// 매개변수에 타입을 지정하지 않으면 기본으로 any로 설정되어 
// 어떤값이든 삽입할수있게 된다. 
function print(message) {
    console.log(message)
}

function add(x:number, y:number):number{
    return x + y; 
}

const result = add(1,2);

