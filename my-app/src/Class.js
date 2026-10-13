import React, { useState } from 'react';

function Class() {

  const [darkTheme, setDarkTheme] = useState(false);
 
 const [text,setText ] = useState("");



  const inc = () => {
    setDarkTheme(!darkTheme);
  };



  return (
    <div style={{ backgroundColor: darkTheme ? "grey" : "white", height: "100vh" }}>
    
      <span style= {{ cursor: "pointer" }} onClick={inc}>
        {darkTheme ? "☀️" : "⏾"}
      </span>

      <h2>Live Character Counter</h2>
      <input type = "text" placeholder='' value={text} onChange={(e) => setText(e.target.value)}/>
      <p>Character count :  {text.length}</p>




    </div>
  );
}

export default Class;
