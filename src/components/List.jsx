import React from 'react';
import { useState, useEffect } from 'react';
import Sect from './Sect';

export default function List({ tasks, settasks }) {
  const [todos, settodos] = useState([]);
  const [inprogress, setinprogress] = useState([]);
  const [closed, setclosed] = useState([]);

  useEffect(() => {
    if (tasks) { // Check if tasks is not null or undefined
      const ftodos = tasks.filter((task) => task.status === "todo");
      const finprogress = tasks.filter((task) => task.status === "inprogress");
      const fclosed = tasks.filter((task) => task.status === "closed");

      settodos(ftodos);
      setinprogress(finprogress);
      setclosed(fclosed);
    }
  }, [tasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div className='flex gap-16'>
      {statuses.map((status, index) => (
        <Sect key={index} status={status}
        tasks={tasks}
        settasks={settasks}
        todos={todos}
        inprogress={inprogress}
        closed={closed} />
      ))}
    </div>
  );
}


