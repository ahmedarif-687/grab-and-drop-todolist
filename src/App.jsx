import { useEffect, useState } from 'react'
import Createtask from './components/Createtask'
import List from './components/List'
import toast, { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  const [tasks, settasks] = useState([])

  useEffect(() => {
   settasks(JSON.parse(localStorage.getItem("tasks")))    

  },[])
  

  console.log(tasks)
  return (
    <>
    <DndProvider  backend={HTML5Backend}>
    <Toaster />
    <div className='bg-slate-100 h-screen flex flex-col items-center gap-16 pt-32'>
     <Createtask tasks={tasks} settasks={settasks}/>
     <List tasks={tasks} settasks={settasks}/>
    </div>
    </DndProvider>
    </>
  )
}

export default App
