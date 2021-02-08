import {INCREMENT,DECREMENT,RESET } from './Constants';


export const Increment =()=>{
    console.log("Coming to incremtn")

    return {
        type: INCREMENT,
        value: 1
    }
}

export const Decrement =()=>{
    return{
        type: DECREMENT,
        value:1
    }
}

export const reset =()=>{
    return {
        type: RESET,
        value:1
    }
}

