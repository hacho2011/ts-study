{
   /**
    * javascript 
    * Primitive : number, string, boolean , bigint, symbol, null, undefined
    * Object: function, array.....
    */

   //number
   const num:number = 1; 

   //string
   const str:string = 'hello';

   //boolean
   const bool:boolean =false; 

   //undefined 
    let age: number | undefined; 
    age = undefined; 
    age = 1; 

    function find(): number | undefined {
        return undefined; 
    }

   //null
   let person: string | null;
   person = 'person'
   person = null; 

   //unknown 
   let notSure: unknown = 0; 
   notSure = 'string'

   //any
   let anything: any = 0; 
   anything = 'hello'

   //void
   function print():void {
    return; 
   }

   //never
   function throwError(message: string): never {
    throw new Error(message);
    while(true){

    }
   }

   // object
   let obj: object; 
   function acceptSomeObject(obj:object){}
   acceptSomeObject({name: 'ellie'});
   acceptSomeObject({animal:'dog'});
}