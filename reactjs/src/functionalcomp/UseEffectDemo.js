import React,{useState,useEffect} from "react";
function UseEffectDemo(){
    const [mytime,getMytime]=useState(" ");
    const tick=()=>{
        let time=new Date().getHours()+":"+
                 new Date().getMinutes()+":"+
                 new Date().getSeconds();
    getMytime(time);
    }
    useEffect(()=>{
        const t=setInterval(tick,1000);
        return()=>{
            clearTimeout(t);
    }
    },[mytime]);
    return(
        <div>
            <h1>Clock</h1>
            <h2>{mytime}</h2>
        </div>
    );
    }
    export default UseEffectDemo;