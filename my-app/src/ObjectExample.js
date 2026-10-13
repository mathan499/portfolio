import React from "react";


const ObjectExample =()=>{

    const student = [{
        id:1,
        name:"Arun",
        age:21,
        department:"MCA",
        marks:90

    },
    {
        id:12,
        name:"supriya",
        age:27,
        department:"MCA",
        marks:99
    }
    ]
     
    //const data = student.map((i) => {

    const numbers=[1,2,3,4,5,6];
    console.log("pop",numbers.pop(),numbers)
    console.log("push",numbers.push(7),numbers)
    console.log("shift",numbers.shift(),numbers)
    console.log("unshift",numbers.unshift(),numbers)



    const filtered = numbers.filter(
        function(x) {
            return x > 5
        }
    
    )
    console.log(filtered)
    const names = ["nandhu","mathan","tharun","prakash"]
    const result=names.slice(1,3)
    console.log("result",result,names)
    const spliceresult=names.splice(1,2,"added")
    console.log(">>>>>",spliceresult)
    console.log(names)

    const datamark = student.filter((i) => i.marks > 95)
  //  console.log(datamark)
    
    return (
        <>
           <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mark</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Lokesh</td>
                        <td>20</td>
                        <td>98</td>
                    </tr>
                    <tr>
                        <td>Mathan</td>
                        <td>19</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
            {datamark.map((i) => {

                return(
                    <>
                       {i.name}
                    </>
                )
            })}
        </>
    )
        
           

//console.log(data)
//return(
  //  <>
    //   {student[1].id}<br/>
      // {student[1].name}
       //</>
//)
}
export default ObjectExample