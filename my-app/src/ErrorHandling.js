import React, { useState } from 'react'
import './ErrorHandling.css'


function ErrorHandling({data}) {
    console.log(data)
    const[value,setValue]=useState(
        {
            name:"",
            Email:"",
            mobile:""
        }
    )
    const [error,setError]=useState({
        nameError:"",
        EmailError:"",
        mobileError:""
    })

function change(event){
    setValue(
        {
            ...value,
            [event.target.name]: event.target.value
        }
    )
}



function handleSubmit(event){

    event.preventDefault();

console.log(value)
    if(value.name == ""){
      setError({
        ...error,
        nameError:"Field is required",
       
      })
    }
    else if(value.name.length<3){
       setError({
        ...error,
        nameError:"less than 3 letters",
       
       })
        
    }
    

}




  return (
    <div>
        <div>
            <h1>Learn & Discover</h1>
        </div>

      

      <form onSubmit={handleSubmit}>
        Name <input type="text" placeholder="" name="" onChange={change}/><br/>
        <span style={{color:'red'}}>{error.nameError}</span><br/>

        Father Name <input type="text" placeholder="" name="name" onChange={change}/><br/><br/>

        
        Date of Birth <input type="text" placeholder="" name="name" onChange={change}/><br/><br/>
        Gender <input type="text" placeholder="" name="name" onChange={change}/><br/><br/>
        Register Number[+2/ Diplamo /UG]  <input type="text" placeholder="" name="name" onChange={change}/><br/><br/>
        Email <input type="email" placeholder="" name="email" onChange={change}/><br/><br/>

        Mobile Number <input type="number" placeholder="" name="mobile" onChange={change}/><br/><br/>
        Parent Mobile Number <input type="number" placeholder="" name="mobile" onChange={change}/><br/><br/>
        Community <input type="text" placeholder ="" name="email" onChange={change}/><br/><br/>
        First Graduate <input type="text" placeholder="" name="email" onChange={change}/><br/><br/>
        Address <input type="text" placeholder="" name="email" onChange={change}/><br/><br/>
        City/Town  <input type="text" placeholder="" name=" " onChange={change}/><br/><br/>
        District   <input type="text" placeholder="" name=" " onChange={change}/><br/><br/>
        State <input type="email" placeholder="" name="" onChange={change}/><br/><br/>




        
        
        <button type='submit'>Apply</button>
      </form>

    </div>
  )
}

export default ErrorHandling
