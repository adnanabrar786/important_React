import {useState,useEffect} from "react";

//                           agr condition true hogi tb hi state run hogi (useEffect mai)



import React from 'react'

const HandleUseEffect = () => {

    const [count , setCount] = useState(0);

    //              Life Cycle of React comonents   
    
   //                 1)   componentDidMount
    //    useEffect(() => {
    //  useEffect(() => {
    //     console.log("work 1");   
    //   },[]);
      
    //2)    componentDidUpdate
    //   useEffect(() => {
    //    console.log("work 1");     
    //    },[count]);
    
    
    // 3)    componentwillUnmount
       useEffect(() => {
        console.log("work 1");
      return () =>  {
           console.log("work 2");
       }   
       },[count === 3]);

    return (
        <div>
            <p>{count}</p>
          <button onClick={() => setCount(count + 1) } > update </button>
        </div>
    )
}

export default HandleUseEffect

