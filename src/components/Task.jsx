import React from "react";
import toast from "react-hot-toast";
import { Icons } from "react-toastify";
import { useDrag } from "react-dnd";

export default function Task({ task, settasks, tasks }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id : task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
       console.log(isDragging)
    const handleremove = (id) => {
        const ftasks = tasks.filter((t) => t.id !== id);
        settasks(ftasks);
        localStorage.setItem("task", JSON.stringify(ftasks));
        toast.success("task removed" )
      };
      


  return (
    <div ref={drag} className={`relative p-4 mt-8 shadow-md  rounded-md cursor-grab ${isDragging? "opacity-25" : "opacity-100"}`}>
      <p>{task.name}</p>
      <button className="absolute bottom-4 right-1 text-slate-300" onClick={()=>{
        handleremove(task.id)
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}
