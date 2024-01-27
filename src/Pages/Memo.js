import React, { useState } from 'react'
import {useMemo} from 'react'
export default function Memo({data}) {
    const [inputValue,setInputValue]=useState("");
    const expensiveCalculation=(data)=>{
        console.log("performing calculation");
        return data.toUpperCase();
    };
    const memorizedResult=useMemo(()=>expensiveCalculation(inputValue),[inputValue]);
  return (
    <div><lable>data
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/></lable>
        <p>original data: {inputValue}</p>
    <p>memorized result:{memorizedResult}</p>
     </div>
  );
}
