import React from 'react'
import Header from './Header';
import Task from './Task';
import { useDrop } from 'react-dnd';

export default function Sect({status ,tasks,settasks,todos,inprogress,closed }) {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item)=>{
        additemtosection(item.id)
        },
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const additemtosection = (id) => {
        settasks((prev) => {
          const ntasks = prev.map((t) => {
            if (t.id !== id) {
              return t;
            }
            return { ...t, status: status };
          });
          localStorage.setItem("tasks", JSON.stringify(ntasks));
          return ntasks;
        });
      };
      

    let text="todo";
    let bg="bg-slate-500"
    let taskstomap=todos

    if(status==="inprogress"){
     text="inprogress"
     bg="bg-blue-500"
     taskstomap=inprogress
    }
    if(status==="closed"){
        text="closed"
        bg="bg-green-500"
       taskstomap=closed
       }
  return (
    <>
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-300":""}`}>
      <Header text={text} bg={bg} count={taskstomap.length} />
      {taskstomap.length > 0 &&
        taskstomap.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} settasks={settasks} />
        ))}
    </div>
  </>
  
  )
}
