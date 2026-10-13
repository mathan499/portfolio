import {React,useState} from 'react'
import './Cart.css'
function Cart () {


const [data,setData]=useState({name:"",price:""});

const[product,setProduct]=useState([
    {
        id:1,
        name:"Wireless Mouse", 
        price:650,
        quantity:1 },
    {
        id:2,
        name: "Bluetooth speaker",
        price:2000,
        quantity:1 }    
]);
    







  return (
    <>
       <h1>Shopping Cart</h1>
   
    <form>
      <label>
         Name :
        <input type="text"
          value={data.name}
          onChange={(e) => setData({...data, name: e.target.value})}
        />
      </label>
      <label>
        Price :
        <input type="number"
          value={data.price}
          onChange={(e) => setData({...data, price: e.target.value})}
        />
      </label>
    </form> 
     <button >ok</button>

    </>
  )
}

export default Cart
