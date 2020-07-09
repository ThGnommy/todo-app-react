import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import './App.css';
import NewTask from './components/NewTask/NewTask';
import CreateTask from './components/CreateTask/CreateTask';
import styled from 'styled-components';
import Task from './components/Task/Task';

const App = () => {

  const listRef = React.createRef()

  const [showInput, setShowInput] = useState(false);
  const [display, setDisplay] = useState('none');
  const [symbol, setSymbol] = useState('+')

  const [task, setTask] = useState([]);

  useEffect(() => {
    handleCreateTask();
  })

  const handleCreateTask = () => {
    if(!showInput) {
      setDisplay('none')
      setSymbol('+')
    }
    else {
      setDisplay('block')
      setSymbol('-')
    }
  }

  const TaskList = styled.ul`
    padding: 0;
  `

  const SetTextToTask = () => {

    const id = document.getElementById('input-task')

    if(id.value === '') { return; }

    // setTask(task.concat(<Task text={id.value} />))

    setTask(task => [...task, <Task key={id.value} text={id.value} />])

    console.log([...task])
  }

  return (
    <div className="App">
      <Header title="TO DO APP" />
      <NewTask 
        onClick={() => setShowInput(!showInput)} 
        symbol={symbol}
      />
      <CreateTask display={display} onClick={SetTextToTask} />
      <TaskList ref={listRef}>
        {task}
      </TaskList>
    </div>
  );
}

export default App;
