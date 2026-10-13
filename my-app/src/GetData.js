import {React,useState,useEffect} from 'react'
import axios from 'axios'

const GetData = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=> {setData(res.data)})
    }, [])











  return (
    <>
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>ID</th>
                </tr>
            </thead>
         </table>



         {data.map((i) => {
            return(
                <>
                    <tbody>
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.id}</td>
                        </tr>
                    </tbody>
                </> 
            )
         })}
    
    
    </>
    

  )
}

export default GetData
