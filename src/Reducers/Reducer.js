import { INCREMENT } from "../Actions/Constants";
import { DECREMENT } from "../Actions/Constants";
import { RESET } from "../Actions/Constants";



var initialState = 100

const Reducer =(state=initialState, action)=>{
    console.log("Reducer I am",action.type);

switch(action.type)
{
    case INCREMENT:  return state+1;
                     break;

    case DECREMENT: return state-1;
                    break;

     case RESET: return state*0;
                  break;      

    default: return state;
}


}

export default Reducer;