import React, { useState } from "react";

const app=()=>{
  const [tittle,settittle]=useState("")
  const [desc,setdesc]=useState("")
  const[maintask,setmaintask]=useState([])//  value ko store karne ke liye use kiya hai
  const deletehandeler=(i)=>{
               const copytask=[...maintask]
               copytask.splice(i,1)
               setmaintask(copytask)
              // console.log("hello")
  }
   const submithandler=(e)=>{
    e.preventDefault()
    if(tittle.trim() && desc.trim()){// IT ENSURE THAT TITLE AND DESC (DESCRIPTION) ARE NOT EMPTY 
          setmaintask([...maintask,{tittle,desc}])//spred operator lagaya hai Add task ke liye
    // console.log(tittle)
    // console.log(desc)

    settittle("")//clear input
    setdesc("")
    // console.log(maintask)
    
   }
  }
   let rendertask=<h2 className="text-xl font-bold">No Task</h2>
    if(maintask.length>0){
   rendertask=maintask.map((e,i) => {
    return(
      <li className="list-none"><div className="flex justify-between text-center text-2xl font-bold my-2">
        
        <h5  className="desc-style"
            style={{
              whiteSpace: "normal", // Allow wrapping
              wordWrap: "break-word", // Break words if necessary
              overflow: "hidden", // Hide overflow content
              textOverflow: "ellipsis", // Add ellipsis for overflow text
            }}>{e.tittle}</h5>
       <h6  className="desc-style"
            style={{
              whiteSpace: "normal", // Allow wrapping
              wordWrap: "break-word", // Break words if necessary
              overflow: "hidden", // Hide overflow content
              textOverflow: "ellipsis", // Add ellipsis for overflow text
            }}>{e.desc}</h6>
       <button onClick={deletehandeler} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button></div></li> 
    )
   })
  }
  return(
    <>
    <h1 className="bg-black text-3xl text-neutral-200 font-bold flex items-center justify-center p-4">My ToDo's</h1>
    <form onSubmit={submithandler} className="p-5">

    <div className="flex flex-col space-y-4 md:space-y-6  ">
      <input value={tittle} onChange={(e)=>{
        settittle(e.target.value)
      }} type="text" placeholder=" enter your tittle " className="bg-black text-yellow-50 p-3 border-l-black text-xl m-5"></input>
      
      <input value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }} type="text" placeholder=" enter your description" className="bg-black text-yellow-50  p-3 border-l-black text-xl m-5 "></input>

      <button  className="bg-black  text-yellow-50 p-3 mx-4 text-xl rounded-xl ">Add task</button>
 </div>
   </form>

   <div className="p-8 bg-slate-300">
    <ul>{rendertask}</ul>
   
   </div>
    </>
  )
}
export default app