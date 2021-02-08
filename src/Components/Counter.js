import React,{Component} from 'react';
import { bindActionCreators } from 'redux'


import {connect} from 'react-redux';
import {Increment,Decrement,reset} from '../Actions/Index'

class Counter extends Component
{

    

    handleIncrement =()=>{
        this.props.action1();

    }

    handleDecrement =()=>{
this.props.action2();
        
    }

    handleReset =()=>{
        this.props.action3();

    }
   
 render()
 {
    
     return(
             <React.Fragment>
             <button onClick={this.handleIncrement}>Increment</button>
             <h1>{this.props.myState}</h1>
             <button onClick={this.handleDecrement}> Decrement</button>
             <button onClick={this.handleReset}>Reset</button>
             </React.Fragment>
     )
 }

}
const  mapStateToProps =(state)=>{

    return{
        myState: state
    }

}



const  mapDispatchToProps=(dispatch)=> {
    return{
        action1: () => dispatch(Increment()),
        action2: () => dispatch(Decrement()),
        action3: () => dispatch(reset()),

    }
       
    
}
    
    



export default connect(mapStateToProps, mapDispatchToProps)(Counter);