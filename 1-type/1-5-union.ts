{
    /**
     * Union
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction:Direction){
        console.log(direction)
    }
    move('down');

    type TileSize = 8 | 12| 32; 
    const tile: TileSize = 12;

    //function: login => success, fail; 

    type SuccessState= {
        response: {
            body: string; 
        }
    }
    type FailState = {
        reason: string; 
    }

    type LoginState = SuccessState | FailState;

    // function login(id:string, password: string): Promise<LoginState> {
    // function login(): LoginState {
    //     return  {
    //         response: {
    //             body: 'logged in!'
    //         }
    //     }
    // }

    // function printLoginState(state: LoginState){
    //     if('response' in state){
    //         console.log(`${state.response.body}`);
    //     }else {
    //         console.log(`${state.reason}`);
    //     }
    // }


}