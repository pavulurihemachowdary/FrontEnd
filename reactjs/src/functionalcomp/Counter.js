import { useState } from "react";
import React from 'react';

export default function Counter(){
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1)
    };
    return(
        <div>
            <button onClick={handleClick}>clickme</button>
            <h1>count:{count}</h1>
        </div>
    );
    }
