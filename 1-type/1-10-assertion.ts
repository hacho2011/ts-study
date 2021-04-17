{
    /**
     * Type Assertions 
     */

    function jsStrFunc():any {
        return 'hello';
    }

    const result = jsStrFunc(); 

    console.log((result as string).length);

    // 결과값이 특정한 타입이라고 확신할때만 사용.
     const wrong: any = 5; 
     console.log((wrong as Array<number>).push(1)); // 에러발생

     function findNumbers(): number[] | undefined {
         return undefined; 
     }

     const numbers = findNumbers(); 
     numbers!.push(2);  // ! << 느낌표를 붙이면 장담하는 역할 

     const button = document.querySelector('class')!; // 100%의 상황일때만
    
}