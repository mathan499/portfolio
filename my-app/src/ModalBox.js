
import {React,useState} from 'react'
import './ModalBox.css'

function ModalBox() {

  const [Modal,setModal] = useState(false)

  return (
    <>
    <div> </div>

    {Modal ?  <div classsName="modal">
      <span>Are you sure , Do you want to continue?</span>
      <button onClick= {() =>setModal(false)}>Ok</button>
    </div> : ""
    } 

     <button onClick={() => setModal(true)}>Confirm</button> 
    {/*over lay*/}   
    <div>
      <img src="C:/Users/MATHANRAJ Y/Downloads/WhatsApp Image 2026-10-07 at 3.03.19 PM.jpeg" alt=""/>

      <h1>Secure all your devices</h1>
      <p >Ensure your mobile phone, laptop , and other<br/>
          devices are protected online.</p>
      <button className="head">Purchase Premium</button>
      <button className="foot">x</button>
      </div>  
      
    
    
    
    </>
  )
}

export default ModalBox
