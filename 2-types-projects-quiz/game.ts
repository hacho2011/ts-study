/**
 * Let's make a game 🕹
 */

 let position = { x: 0, y:0};

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction:Direction):object{
    switch(direction){
        case 'up': 
        position.x++; 
        return position;
        case 'down':
            position.y--
            return position
        case 'left':
            position.x--
            return position
        case 'right':
            position.x++
            return position
        default: 
        throw new Error(`unknown`)
    }
};
    
function move2(direction:Direction){
    switch(direction){
        case 'up': 
            position.y+=1; 
            break;
        case 'down':
            position.y-=1
            break;
        case 'left':
            position.x-=1
            break;
        case 'right':
            position.x+=1
            break;
        default: 
        throw new Error(`unknown`)
    }
};