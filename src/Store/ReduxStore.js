import React from 'react';
import {useDispatch,useSelector} from "react-redux"
import "./ReduxStore.css";
import { counterActions } from './ManagingReuduxToolkit';

export default function ReduxStore() {
    const dataCounter = useSelector((state)=> state.counter);
     const showCounter = useSelector(state => state.showCounter); 
    const dispatch = useDispatch();

    const incrementCounter = () => {
        // dispatch({ type: "increment" });
        dispatch((counterActions.increment()))
    }

    const decrementCounter = () => {
        // dispatch({ type: "decrement" });
        dispatch((counterActions.decrement()))
    }

    const incrementBy5 = () => { 
        // dispatch({ type: "incrementby5", amount: 5 });
        dispatch((counterActions.incrementby5(5)))
    }

    const decrementBy5 = () => { 
        // dispatch({ type: "decrementby5", amount: 5 });
        dispatch(counterActions.decrementby5(5))
    }

     const toggleCounter = () => {
        // dispatch({ type: "toggle" }); 
        dispatch(counterActions.Toggle())
     }

    return (
        <div className='store'>
            <div>
            <h2>Redux counter</h2>
            {showCounter &&<h1>{dataCounter}</h1> }
            <button onClick={incrementCounter} >Increment</button>
            <button  onClick={decrementCounter}>Decrement </button>
            <button onClick={incrementBy5}>Increment by 5</button>
            <button onClick={decrementBy5} >Decrement by 5</button>
            <button  onClick={toggleCounter}>Toggle counter</button>
            </div>
        
        </div>
    )
}
