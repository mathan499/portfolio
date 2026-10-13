import {React,useState} from "react";
import './Accordion.css'

const Accordion = () => {
    const [open,setOpen]=useState(null)
  //  function expand(){
    //    setOpen(!open)
    
    const accor = [
        { id: 1,title:"Accordian 1", para:"this is my website"},
        { id: 2,title:"Accordian 2", para:"welcomt to this site"}
    ]
    function handleId(id) {
        console.log(id)
        setOpen(open === id ? null : id)

    }
    return (
        <>
            {/* <p className='head'onClick={expand} >Accordion 1</p>
         { open? <p >paragraph </p> :""} */}
       
           {
              accor.map((res) => {
                return (
                    <>
                       <p className='head' onClick={() =>handleId(res.id)}>{res.title}</p>
                     
                       { open==res.id? <p>{res.para} </p> :""} 
                    </>
                )
              })
           }
    
       
        </>
    )
}
export default Accordion