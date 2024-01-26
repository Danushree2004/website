import React from 'react'
import { useReducer } from 'react'
import '../css/Reducer.css'
const counterReducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{count:state.count+1};
        case 'DECREMENT':
            return{count:state.count-1};
        default:
            return state;
    }
};
export default function Reducer() {
    const [state,dispatch]=useReducer(counterReducer,{count:0})
  return (
    <div><p>
        count:{state.count}</p>
        <div className='button'>
        <button onClick={()=>dispatch({type: "INCREMENT"})}>ADD</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>SUB</button></div></div>
  )
}
