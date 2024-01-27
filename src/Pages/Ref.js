import React, { useRef,useEffect } from 'react'

export default function Ref() {
    const myRef=useState(null);
    
    useEffect(()=>{

console.log(myRef.current);
    },[]);
  return (
    <div><input ref={myRef} type="text"/></div>
  )
}
