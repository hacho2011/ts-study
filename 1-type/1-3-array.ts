
{
    //Array
    const fruits: string[] = ['tomato', 'banana'];
    const scores: Array<number> = [1,2,3];

    function printArray(fruits: readonly string[]){
        
    }

    // Tuple => interface, type alias, class
    let student: [string, number]; 
    student = ['number', 123];
    
    const [name, age] = student; 
    
}