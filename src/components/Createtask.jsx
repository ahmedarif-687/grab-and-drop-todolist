import React from 'react'
import {useState} from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';


export default function Createtask({tasks,settasks}) {

    const [task, settask] = useState({
        id:"",
        name:"",
        status:"todo"
    })
    // console.log(task)

    const handlesubmit=(e)=>{
     e.preventDefault();

     if (task.name.length<3)
     return toast.error("please type more than 3 characters")
     const existingTasks = JSON.parse(localStorage.getItem("task")) || [];
     const updatedTaskList = [...existingTasks, task];

      localStorage.setItem("task", JSON.stringify(updatedTaskList));

      settasks(updatedTaskList);
     toast.success("task created")

     settask({
        id:"", name:"",status:"todo"
     })
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
      <input type="text" className='border-2 border-slate-100 rounded-md mr-4 h-10 w-64 px-1'  
      onChange={(e)=>{
          settask({...task, id:uuidv4(), name:e.target.value })
        }} value={task.name}/>
     <button className='bg-cyan-500 rounded-md px-4 h-10 text-white'>Create</button>
        </form>
    </div>
  )
}

