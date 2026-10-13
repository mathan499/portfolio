import React, { useState } from 'react';

function Header(){
    const [status,setStatus]=useState("")
    const Ctime = new Date().toLocaleTimeString();
    console.log(Ctime)
    if(Ctime>="3:50:02" && status != "grey")
    {
       console.log("system is offline")
       setStatus("grey")
    }
    return(
        <>
            <div style={{width:"100%",height:"100vh",backgroundColor:status}}>
                HEADER REACT
                {status}
                <button disabled={status == "grey" ? true : false}>test</button>
            </div>
        
        
        </>
    )
}
export default Header