import React, { useState } from "react";
export default () => {
    let currTime = new Date().toLocaleDateString();
    const [time, changeTime]=useState("TIME");
    const showTime =()=>{
        changeTime(currTime)
    }
    const hideTime =()=>{
        changeTime("")
    }
    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={showTime}>Get Time</button>
            <button onClick={hideTime}>Hide Time</button>
        </div>
    )
}